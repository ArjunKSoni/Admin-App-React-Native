import React, { useState } from 'react';
import { View, Text, StatusBar, ImageBackground, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import GenderSelection from './components/RadioGender';
import HowDidYouHearAboutUs from './components/HowdidYou';
import CityDropdown from './components/City';
import StateSearchBox from './components/State';
import { signup } from './api/Auth';


export default function Signup({ navigation }) {
    const [searchQuery, setSearchQuery] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState('male');
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const Signup=async()=>{
        const user=await signup(name,email,phone,password,city,searchQuery,gender,selectedOptions);
        if(user) navigation.replace("home",{user:user});
    }

    const handleSubmit = () => {
        if (name === "") {
            Alert.alert("Account not created", "Name can not be empty")
        }
        else if (email === "") {
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
        else if (phone === "" || phone.trim().length!=10) {
            Alert.alert("Account not created", "Enter valid Phone number")
        }
        else if (city === "") {
            Alert.alert("Account not created", "Please select your City")
        }
        else if (searchQuery === "") {
            Alert.alert("Account not created", "Please select your State")
        }
        else {
            Signup();
        }
    }


    return (
        <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" className="flex-1 items-center pt-5">
            <Text className="text-3xl font-bold">Signup</Text>
            <View className="flex-1 items-center w-5/6 h-screen justify-center ">
                <ScrollView className="flex-1 w-full" showsVerticalScrollIndicator={false}>
                    <Text className="text-left font-bold text-xl w-full">Name:-</Text>

                    <TextInput
                        style={{ backgroundColor: "#00000040" }}
                        placeholder='Name'
                        value={name}
                        onChangeText={e => setName(e)}
                        keyboardType="ascii-capable"
                        className="w-full mb-3 text-center focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold rounded-lg py-4"
                    />
                    <Text className="text-left font-bold text-xl w-full">Email:-</Text>

                    <TextInput
                        style={{ backgroundColor: "#00000040" }}
                        placeholder='Email'
                        value={email}
                        onChangeText={e => setEmail(e)}
                        keyboardType="email-address"
                        className="w-full mb-3 text-center focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold rounded-lg py-4"
                    />
                    <Text className="text-left font-bold text-xl w-full">Password:-</Text>

                    <TextInput
                        style={{ backgroundColor: "#00000040" }}
                        placeholder="Password"
                        value={password}
                        onChangeText={e => setPassword(e)}
                        keyboardType="visible-password"
                        className="w-full mb-3 text-center focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold rounded-lg py-4"
                    />
                    <Text className="text-left font-bold text-xl w-full">Phone:-</Text>

                    <TextInput
                        style={{ backgroundColor: "#00000040" }}
                        placeholder='Phone'
                        value={phone}
                        onChangeText={e => setPhone(e)}
                        keyboardType="number-pad"
                        className="w-full mb-3 text-center focus:outline-none focus:ring focus:border-blue-300 text-xl font-bold rounded-lg py-4"
                    />
                    <Text className="text-left font-bold text-xl w-full">Gender:-</Text>
                    <GenderSelection gender={gender} setGender={setGender} />

                    <Text className="text-left font-bold text-xl w-full">How did you hear about this?</Text>
                    <HowDidYouHearAboutUs selectedOptions={selectedOptions} setSelectedOptions={setSelectedOptions} />

                    <Text className="text-left font-bold text-xl w-full">City:-</Text>
                    <CityDropdown city={city} setCity={setCity} />

                    <Text className="text-left font-bold text-xl w-full">State:-</Text>
                    <StateSearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                    <Text className="mb-3 font-bold text-slate-800">Already have an account? <Text className="text-blue-700" onPress={e => navigation.replace("login")}>Sign in</Text></Text>

                    <TouchableOpacity onPress={handleSubmit} touchSoundDisabled={false} style={{ elevation: 10 }} className="bg-green-500 py-3 mb-10 rounded-lg" activeOpacity={0.9}>
                        <Text className="text-xl font-bold text-center">Submit</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <StatusBar barStyle="light-content" backgroundColor="#00000090" />
        </ImageBackground>
    );
}
