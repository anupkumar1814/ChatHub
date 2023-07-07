
// components
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";


import Messenger from "./components/Messenger";

function App() {
  const clientId = "599330119797-u3ukl4s51h99ee6t0kvjjgv7e84fkcnj.apps.googleusercontent.com";
  return (
    //wrap your whole app in GoogleOathProvider
    <GoogleOAuthProvider clientId={clientId} >
   
      <AccountProvider>
        <Messenger />   {/* we have to wrap all the components in which we want to use the state in  AccountProvider component */}
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
