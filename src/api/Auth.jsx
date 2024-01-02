import axios from "axios";
import { Alert } from "react-native";

const api="https://admin-app-backend.vercel.app/";

export const signup=async(Name,Email,Phone,Password,City,State,Gender,HearAboutUs)=>{
    const data=await axios.post(api+"auth/signup",{Name,Email,Phone,Password,City,State,Gender,HearAboutUs})
    if(data=="User Already Exist"){
        Alert.alert("User alerady exist","Try logging in")
    }
    else{
        console.log(data.data.status);
        return data.data.status
    }
    
}

export const login=async(Email,Password)=>{
    const data=await axios.post(api+"auth/login",{Email,Password})
    if(!data.data.token){
        Alert.alert("Incorrect Credentials","Enter correct Email and Password")
    }
    else{
        console.log(data.data.token);
        return data.data.token;
    }
    
}

export const getallusers=async()=>{
    const data=await axios.post(api+"user/getallusers")
    console.log(data.data.HomeUser);
    return data.data.HomeUser;
}

export const editUser=async(Id,Name,Phone,Email)=>{
    console.log(Name);
    const data=await axios.post(api+"user/edit",{Id,Name,Email,Phone})
    console.log(data.data);
    return data.data.user;
}

export const addUser=async(Name,Phone,Email)=>{
    console.log(Name);
    const data=await axios.post(api+"user/add",{Name,Email,Phone})
    console.log(data.data.status);
    return data.data.status;
}

export const deleteuser=async(Id)=>{
    console.log(Id);
    const data=await axios.post(api+"user/delete",{Id})
    console.log(data.data);
    return data.data.status;
}