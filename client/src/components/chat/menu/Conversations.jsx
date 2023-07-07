
import { useEffect, useState, useContext } from "react";


import { AccountContext } from "../../../context/AccountProvider";


import { Box, styled, Divider } from "@mui/material";


import { getUsers } from "../../../service/api";
import Conversation from "./Conversation";


const Component = styled(Box)`
    height:81vh;
    overflow:overlay;

`;

const StyledDivider = styled(Divider)`
 margin:0 0 0 70px;
 background-color:#e9edef;
 opacity:0.4;

`;


const Conversations = ({text}) => {

    
    const [users, setUsers] = useState([])
    const { account,socket,setActiveUsers } = useContext(AccountContext);


    //https://www.w3schools.com/react/react_useeffect.asp
    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            
            const filterData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filterData);
        }
        fetchData();
    }, [text]);

    useEffect(()=>{
        socket.current.emit('addUser',account);
        socket.current.on('getUsers',users=>{
            setActiveUsers(users);
        })
    },[account])
    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                        <StyledDivider />
                    </>

                ))
            }
        </Component>
    )
}
export default Conversations;