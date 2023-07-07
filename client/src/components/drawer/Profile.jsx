import { useContext } from "react";


import { AccountContext } from "../../context/AccountProvider";



import { Box, styled, Typography } from "@mui/material";



const ImageContainer = styled(Box)`
   display:flex;
   justify-content:center;
`;

const Image = styled('img')({
    width: 150,
    height: 150,
    borderRadius: '50%',
    padding: '25px 0'
});
const BoxWrapper = styled(Box)`
    background:#ffffff;
    padding:'12px 30px 2px';
    box-shadow:0 1px 3px rgba(0,0,0,0.1);
    & :first-child{
     margin-left:22px;
        font-sixe:11px;
        color:#0000FF;
        font-weight:200;
      padding-top:7px
    }
    & :last-child{
        margin: 8px 13px 10px 24px;
        color:#4A4A4A;
        padding-bottom:8px
    }

`
const DescriptionContainer=styled(Box)`
    padding:9px 20px 28px 30px;
    & > p {
        font-size:13px;
        color:#8696a0;
    }

`
const Profile = () => {
    const { account } = useContext(AccountContext);

    return (
        <>


            <ImageContainer>
                <Image src={account.picture} alt="dp" />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <DescriptionContainer>
            <Typography>This is not your username or pin . This name will be visible to your GroupChat contacts.</Typography>
            </DescriptionContainer>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>Eat! Sleep! Code! Repeat!</Typography>
            </BoxWrapper>

        </>
    )
}
export default Profile;