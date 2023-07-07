

import { useContext } from 'react';

//importing api funtion for calling api(named addUser)
import { addUser } from '../../service/api';


import { GoogleLogin } from '@react-oauth/google';
import { AccountContext } from '../../context/AccountProvider';
import jwt_decode from "jwt-decode";




import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material';



import { qrCodeImage } from '../../constants/data';



const Component = styled(Box)`
    display:flex;
    padding-right:10px
`


const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overflow: 'hidden',
    background:'#87CEFA'
}

const Container = styled(Box)`
     padding:"56px 0 56px 56px";
`
const QRCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 30px 10px 50px'
})

const Title = styled(Typography)`
    font-size:23px;
    color:#525252;
    font-weight:300;
    font-family:inherit;
    margin-bottom:25px;
    margin-top:55px;
    margin-left:50px
`

const StyledList = styled(List)`
    & > li {
        margin-left:40px;
        font-size:18px;
        line-height:30px;
        color:#4a4a4a;
    }
`

const LoginDialog = () => {


    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {

        const decoded = jwt_decode(res.credential);
        console.log(decoded);
        // we will store this decoded information of response globally so that we can use this information anywhere in our project ;
        // to store this information we will use an API  called Context Api  which is a state in treact which helps to manage information


        // to store accoint information in AccountContext so that it will be globally stored
        setAccount(decoded);
        // passing decoded information to api which will hit backend url with this data(decoded)
        await addUser(decoded);

    }


    const onLoginError = (res) => {
        console.log("login failed  ", res);
    }




    return (
        <Dialog

            open={true}//keep the dialog open
            PaperProps={{ sx: dialogStyle }} //paperprops set properties to Dialog box dialogStyle is object passed to paperProps
            hideBackdrop={true}// if false then background of Dialob Box will be dark when box is open

        >
            <Component>


                <Container>


                    <Title> To start using ChatHub......</Title>

                    <StyledList>
                        <ListItem>1. Login using the beside given Google Authentication.</ListItem>
                        <ListItem>2. Select the person to chat.</ListItem>
                        <ListItem>3. Start chatting.</ListItem>
                    </StyledList>


                </Container>



                <Box style={{ position: 'relative' }}>

                    <QRCode src={qrCodeImage} alt="QR code" />

                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(25%)' }}>
                        {/* <Box style={{ height:'50px',width:'100px',position: 'absolute', top: '50%', transform: 'translateX(25%)',background:'red' }}> */}
        {/* https://www.npmjs.com/package/react-google-login */}
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />

                    </Box>

                </Box>


            </Component>
        </Dialog>
    )
}
export default LoginDialog;

    