import { Box,Typography,styled } from "@mui/material";
import { Search,MoreVert } from "@mui/icons-material";

import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { defaultProfilePicture } from "../../../constants/data";

const Header=styled(Box)`
    height:58px;
    display:flex;
    background:#ededed;
    align-items:center;

`

const Image=styled('img')({
    height:40,
    width:40,
    objectFit:'cover',
    borderRadius:'50%',
    marginLeft:'12px'
})


const Name=styled(Typography)`

    margin-left:12px !important;
`

const Status=styled(Typography)`

    margin-left:12px !important;
    font-size:12px;
    color:rgba(0,0,0,0.6)
`

const RightContainer=styled(Box)`
  margin-left:auto;
  & >svg {
    padding:8px;
    font-size:22px;
    color:#00000;
  }
`


const ChatHeader=({person})=>{
  const {activeUsers}=useContext(AccountContext);
    return (
        <Header>
            <Image src={person.picture} alt={defaultProfilePicture} />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user=> user.sub===person.sub)? "online" :"offline" }</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}
export default ChatHeader;