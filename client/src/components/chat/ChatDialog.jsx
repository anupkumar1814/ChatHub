import { Dialog, Box, styled } from "@mui/material";

import { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

import Menu from "./menu/menu";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";



const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '15px',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    borderRadius: "0px",
    overflow: 'hidden',
    background:'#FFFFFF'
}

const Component = styled(Box)`
    display:flex;
`

const LeftComponent = styled(Box)`
  min-width:400px;
`

const RightComponent = styled(Box)`
 width:75%;
 min-width:300px;
 height:100%;
 border-left:1px solid rgba(0,0,0,0.14);
`

const ChatDialog = () => {
    
    const {person}=useContext(AccountContext);

    return (


        <Dialog

            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            max-width={"md"}

        >
            <Component>

                

                <RightComponent>
                    {Object.keys(person).length ? <ChatBox />:<EmptyChat /> }
                </RightComponent>
                <LeftComponent>
                    <Menu />
                </LeftComponent>

            </Component>

        </Dialog>


    )
}

export default ChatDialog;