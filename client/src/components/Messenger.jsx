
import { useContext } from "react";

import { AccountContext } from "../context/AccountProvider";

import { AppBar, Toolbar, styled, Box } from "@mui/material";


import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";





const Header = styled(AppBar)`
height:100px;
background-color:#0000FF;
box-shadow:none;
`

const LoginHeader = styled(AppBar)`
height:200px;
background-color: #0000FF;
box-shadow:none;
`
const Component = styled(Box)`

height:100vh;
background-color:#000000;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Component>
            {
                account ?
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>
                        <ChatDialog />
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialog />
                    </>
            }

        </Component>
    )
}
export default Messenger;




