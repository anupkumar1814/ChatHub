
import User from "../model/User.js"

// read this in console ->network->timing ->explanation link
//https://developer.chrome.com/docs/devtools/network/reference/?utm_source=devtools#timing-explanation


// since addUser is a function of api and and we know that every api function get request and response from back
// request has data which  has been sent with an api when it is hit i.e. from frontend to backend
// resp0nse we get from backend to frontend on api hitting

export const addUser = async (request, response) => {
    //    console.log(request.body)
    try {

        let exist = await User.findOne({ sub: request.body.sub });

        if (exist) {
            response.status(200).json({ msg: 'user already exist' });
            return;
        }
        
        const newUser = new User(request.body);
        await newUser.save();
        response.status(200).json(newUser);
        
    } catch (error) {

        return response.status(500).json(error.message);

    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        return response.status(200).json(users);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}