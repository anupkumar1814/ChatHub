import { Box,styled ,InputBase} from "@mui/material";
import { EmojiEmotionsOutlined ,Attachment,Mic} from "@mui/icons-material";
import {useEffect} from "react";
import { uploadFile } from "../../../service/api";
const Container=styled(Box)`
    height:55px;
    background:#ededed;
    display:flex;
    width:100%;
    align-items:center;
    padding:0 15px;
    & > *{
        margin:5px;
        color:#919191;
    }
    width: 819px;
`;
const Search=styled(Box)`
    background-color:#ffffff;
    border-radius:12px;
    width:700px
`
const InputField=styled(InputBase)`
    width:100%;
    padding:3px;
    padding-left:25px;
    font-size:15px;

`
const ClipIcon=styled(Attachment)`
    transform:rotate(45deg)
`
 
const Footer=({sendText,setValue,value,file,setFile,setImage})=>{
    // eslint-disable-next-line
    const onFileChange=(e)=>{
        // console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)
    }
 
    useEffect(()=>{
        const getImage= async()=>{
            if(file){
                const data=new FormData();
                data.append("name",file.name);
                data.append("file",file);

                let response=await uploadFile(data);
                // console.log(response);
                setImage(response.data);
            }
        }
        getImage();
    },[file])
    return (
      <Container>
        <EmojiEmotionsOutlined />
        {/* wrapping clipicon */}
        <label htmlFor="fileInput">
        <ClipIcon />
        </label>
        {/* input files */}
        <input 
            type="file" 
            id="fileInput"
            style={{display:'none'}}
            onChange={(e)=> onFileChange(e)}

        />
       
        <Search>
            <InputField placeholder="type a msg" 
                onChange={(e)=>setValue(e.target.value)}
                onKeyPress={(e) => sendText(e)}
                value={value}
            />
        </Search>
        <Mic />
      </Container>
    )
}

export default Footer;