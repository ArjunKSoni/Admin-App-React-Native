import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StatusBar, Alert, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-paper';
import { addUser, editUser, getallusers } from './api/Auth';

export default function Edit({ route, navigation}) {
    const { id, mode, name, email, phone ,user} = route.params;
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState("")

    useEffect(() => {
        if (mode == "edit") {
            setName(name);
            setEmail(email);
            setPhone(phone);
        }
    }, [])
    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit=async()=>{
        if(Name==""){
            Alert.alert("Invalid Name","Enter a valid name")
        }
        else if(Phone.length!=10){
            Alert.alert("Invalid phone number","Minimum length of phone number is 10")
        }
        else if(!isEmailValid(Email)){
            Alert.alert("Invalid Email","Enter a Valid Email")
        }
        else if(mode==="edit"){
            const data=await editUser(id,Name,Phone,Email)
            if(data){
                Alert.alert("Updated Successfully","taking you to the home page")
                navigation.replace("home",{user:user})
            }
        }
        else{
            const data=await addUser(Name,Phone,Email)
            if(data){
                Alert.alert("User added Successfully","taking you to the home page")
                navigation.replace("home",{user:user})
            }
        }
    }

    return (
        <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" className="flex-1 items-center pt-5">
            <Text className="text-3xl font-bold">Edit/Add User</Text>
            <View className="flex-1 items-center w-5/6 h-screen justify-center ">
                <ScrollView className="flex-1 w-full" showsVerticalScrollIndicator={false}>
                    <Text className="text-left font-bold text-xl w-full">User Name</Text>

                    <TextInput
                        style={{ backgroundColor: "#00000040",height:30  }}
                        placeholder='User Name'
                        value={Name}
                        onChangeText={e => setName(e)}
                        keyboardType="ascii-capable"
                        className="w-full mb-3 text-center focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold rounded-lg py-4"
                    />
                    <Text className="text-left font-bold text-xl w-full">Email</Text>

                    <TextInput
                        style={{ backgroundColor: "#00000040",height:30  }}
                        placeholder="Email"
                        value={Email}
                        onChangeText={e => setEmail(e)}
                        keyboardType="email-address"
                        className="w-full mb-3 text-center focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold rounded-lg py-4"
                    />

                    <Text className="text-left font-bold text-xl w-full">Phone</Text>

                    <TextInput
                        style={{ backgroundColor: "#00000040",height:30 }}
                        placeholder='Phone Number'
                        value={Phone}
                        onChangeText={e => setPhone(e)}
                        keyboardType="decimal-pad"
                        className="w-full mb-3 text-center focus:outline-none text-xl font-bold rounded-lg py-4"
                    />
                    <View className="flex flex-row my-3 items-center justify-around">
                        <TouchableOpacity onPress={handleSubmit} touchSoundDisabled={false} style={{ elevation: 10 }} className="bg-green-500 py-3 mb-10 rounded-lg" activeOpacity={0.4}>
                            <Text style={{width:80}} className="text-xl font-bold text-center">Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.replace("home",{user})} touchSoundDisabled={false} style={{ elevation: 10 }} className="bg-green-500 py-3 mb-10 rounded-lg" activeOpacity={0.4}>
                            <Text style={{width:80}}  className="text-xl font-bold text-center">Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <StatusBar barStyle="light-content" backgroundColor="#00000090" />
        </ImageBackground>
    );
}
