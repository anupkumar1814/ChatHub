import { createContext, useState, useRef, useEffect } from "react";
import { io } from 'socket.io-client';
//we will import AccountContext anywhere in any component where we want to use value stored value from this context
export const AccountContext = createContext(null);

// create a component AccountProvider
const AccountProvider = ({ children }) => {

    // useState is a react hook
    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers,setActiveUsers]=useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const socket = useRef();
    useEffect(() => {
        socket.current = io('ws://localhost:3002')
    }, [])
    return (
        <AccountContext.Provider value={{
            // these will be passed where we will imporrt AccountCon..   as props
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            newMessageFlag,
            setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider;