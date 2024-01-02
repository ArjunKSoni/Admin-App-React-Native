import React, { useState } from 'react';
import { View, Text, StatusBar, ImageBackground, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { login } from './api/Auth';

export default function Login({navigation}) {
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const Login=async()=>{
        const user=await login(email,password);
        if(user) navigation.replace("home",{user:user});
    }

    const handleSubmit = () => {
        if (email === "") {
            Alert.alert("Account not created", "Email can not be empty")
        }
        else if(!isEmailValid(email)) {
            Alert.alert("Account not created", "Not a valid Email")
        }
        else if (password === "") {
            Alert.alert("Account not created", "Password can not be empty")
        }
        else if (password.trim().length<6) {
            Alert.alert("Account not created", "Minimum length of password is 6")
        }
        else {
            Login();
        }
    }
    return (
        <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" className="flex-1 items-center pt-5">
            <Text className="text-3xl font-bold">Log in</Text>
            <View className="flex-1 items-center w-5/6 h-screen justify-center ">
                <ScrollView className="flex-1 w-full" showsVerticalScrollIndicator={false}>
                    <Text className="text-left font-bold text-xl w-full">Email:-</Text>
                    
                    <TextInput
                        style={{backgroundColor:"#00000040"}}
                        placeholder='Email'
                        value={email}
                        onChangeText={e=>setEmail(e)}
                        keyboardType="email-address"
                        className="w-full mb-3 text-center focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold rounded-lg py-4"
                    />
                    <Text className="text-left font-bold text-xl w-full">Password:-</Text>
                    
                    <TextInput
                        style={{backgroundColor:"#00000040"}}
                        placeholder="Password"
                        value={password}
                        onChangeText={e=>setPassword(e)}
                        keyboardType="visible-password"
                        className="w-full mb-3 text-center focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold rounded-lg py-4"
                    />
                    <Text className="mb-10 font-bold text-slate-800">Don't have an account? <Text className="text-blue-700" onPress={e=>navigation.replace("signup")}>Sign up</Text></Text>

                    <TouchableOpacity onPress={handleSubmit} touchSoundDisabled={false} style={{elevation:10}} className="bg-green-500 py-3 mb-10 rounded-lg" activeOpacity={0.9}>
                        <Text className="text-xl font-bold text-center">Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <StatusBar barStyle="light-content" backgroundColor="#00000090" />
        </ImageBackground>
    );
}
