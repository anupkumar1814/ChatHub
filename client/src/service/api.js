//Axios is a promise-based HTTP Client for node.js and the browser.
// It is isomorphic (= it can run in the browser and nodejs with the same codebase).
// On the server-side it uses the native node.js http module,
// while on the client (browser) it uses XMLHttpRequests.

//https://axios-http.com/docss
//https://axios-http.com/docs/api_intro


import axios from 'axios';



// url of backend server
const url="http://localhost:3001";


// creating function which can be use for API calling.

// data is body of api which comes from back i.e. from where we will be calling addUser function in client side in loginDialogBox.jsx file
// data come from google login data from loginDialogBox.jsx file
export const addUser=async (data)=>{
    try{
        // calling API
        //axios.post(url[, data[, config]])
        // hitting post request to server so that we can store our data in database
       await axios.post(`${url}/add`,data);
    } catch(error){
        console.log("error while addUser API ",error.message);
    }
}

 
// creating function of API

export const getUsers=async ()=>{
    try{
        //axios.get(url[, config])
        let response =await axios.get(`${url}/users`);
        // console.log(response);
        return response.data;
    } catch(error){
        console.log("error while calling getUser api ", error.message);
    }
}

// created setConverstaion api which will get hit whenever we start new conversation

export const setConversation=async(data)=>{
    try{
        await axios.post(`${url}/conversation/add`,data);
    } catch(error){
        console.log("error while calling setConversation api ", error.message);
    }
}

export const getConversation=async(data)=>{
    try{
       let response= await axios.post(`${url}/conversation/get`,data);
       return response.data;
    } catch(error){
        console.log("error while calling getConversation api ", error.message);
    }
}

export const newMessage=async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
    } catch(error){
        console.log("error while calling newMessage api ", error.message);
    }
}

export const getMessages=async(id)=>{
    try{
        let response=await axios.get(`${url}/message/get/${id}`);
        return response.data;
    }catch(error){
        console.log("error while callling getapi message ",error.message);
    }
}

export const uploadFile=async(data)=>{
    try{
        return await axios.post(`${url}/file/upload`,data);
    }catch(error){
        console.log("error while callling uploadFile api ",error.message);
    }
}