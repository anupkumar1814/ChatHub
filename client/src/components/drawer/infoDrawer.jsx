
import { Drawer ,Box, Typography,styled} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";


//components
import Profile from "./Profile";


const Header=styled(Box)`
    background:#0000FF;
    height:84px;
    color:#FFFFFF;
    display:flex;
    & > svg, & > p{
        margin-top:auto;
        padding:15px;
        font-weight:500;
        
    }

`
const Component=styled(Box)`
    background:#ededed;
    height:85%;

`
const Text=styled(Typography) `
font-size:18px;
`

const drawerStyle={
    left:17,
    top:16,
    height:'95%',
    width:'31%',
    boxShadow:'none'
    
}

const InfoDrawer = ({open,setOpen}) => { 


    const handleClose=()=>{
        setOpen(false);
    } 


    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{zIndex:1500}}
        >
          <Header>
            <ArrowBack onClick={handleClose}/>
            <Text>
                Profile
            </Text>
          </Header>
          <Component>
            <Profile />
          </Component>
        </Drawer>
    )
}

export default InfoDrawer;