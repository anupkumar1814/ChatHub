
import { Box, styled } from "@mui/material";

import { useContext, useState, useEffect } from "react";
// import { Socket } from "socket.io-client/build/esm/socket";
// import { useContext, useState, useEffect ,useRef} from "react";
import { AccountContext } from "../../../context/AccountProvider";

import { getMessages, newMessage } from "../../../service/api";

import Footer from "./Footer";
import { Message } from "./Message.jsx";

const Wrapper = styled(Box)`
    background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
   background-size:50%;
`
const Component = styled(Box)`
     height:77vh;
    
     overflow-y:scroll;
`
const Container = styled(Box)`
    padding:1px 40px;
`
const Messages = ({ person, conversation }) => {

    const [messages, setMessages] = useState([]);

    const [value, setValue] = useState('');
    const { account,socket,newMessageFlag,setNewMessageFlag } = useContext(AccountContext);
    // const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [image,setImage]=useState('');
    const [incomingMessage,setIncomingMessage]=useState(null);
    // const scrollRef=useRef();
    useEffect(()=>{
        socket.current.on('getMessage',data=>{
            setIncomingMessage({
                ...data,
                createdAt:Date.now()
            })
        })
    })
    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data);
            // console.log(data);
        }
        conversation._id && getMessageDetails();
    }, [person.id, conversation._id, newMessageFlag]);

    // useEffect(()=>{
    //     scrollRef.current?.scrollIntoView({transition:'smooth'})
    // },[messages])

    useEffect(()=>{
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
        setMessages(prev=>[...prev,incomingMessage])
    },[incomingMessage,conversation])
    const sendText = async (e) => {
        // console.log(e);
        // eslint-disable-next-line
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message={};
            if (!file) {
                // eslint-disable-next-line 
                 message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            }else{
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }
            socket.current.emit('sendMessage',message);
            // console.log(messages);
            await newMessage(message);
            // clear the input field on sending message to database
            setValue('');
            setFile('');
            setImage('');
            setNewMessageFlag(prev => !prev);
        }
    }
    return (
        <>
            <Wrapper>
                <Component>
                    {
                        messages && messages.map(message => {
                            return (
                                <Container>
                                    <Message message={message} />
                                </Container>
                            )

                        })
                    }
                </Component>
                <Footer sendText={sendText} setValue={setValue} value={value}
                    file={file}
                    setFile={setFile}
                    setImage={setImage}
                />
            </Wrapper>

        </>


    )
}

export default Messages;