import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, StatusBar, TouchableOpacity, Image, Alert } from 'react-native';
import Card from './components/Card';
import { getallusers } from './api/Auth';

export default function Home({ navigation, route }) {
    const { user } = route.params
    const [homeusers, setHomeusers] = useState([]);

    const Logout=()=>{
        Alert.alert(
            'Confirm Logout',
            `Are you sure you want to Logout`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: async () => {
                        navigation.navigate("login");
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: false }
        );
    }

    const Getallusers = async () => {
        const data = await getallusers();
        setHomeusers(data);
    }

    useEffect(() => {
        Getallusers()
    }, [user])
    return (
        <ImageBackground source={require('../assets/bg.jpg')} resizeMode="cover" className="flex-1 items-center pt-5">
            <TouchableOpacity style={{ elevation: 10 }} activeOpacity={0.4} onPress={() => navigation.navigate("edit", { mode: "add", id: "", user: "", email: "", phone: "", user })} className="absolute z-20 bottom-10 right-8 bg-blue-600 rounded-full p-5"><Text className="text-white font-bold">Add</Text></TouchableOpacity>
            <TouchableOpacity style={{ elevation: 10 }} activeOpacity={0.4} onPress={Logout} className="absolute z-20 top-16 right-8 bg-red-500 rounded p-3"><Text className="text-white font-bold">Logout</Text></TouchableOpacity>
            <Text className="text-3xl font-bold">Hi <Text>{user.Name}</Text></Text>
            <View className="flex-1 mt-8 items-center w-5/6 h-screen justify-center ">
                {homeusers.length > 0 &&
                    <ScrollView className="flex-1 w-full" showsVerticalScrollIndicator={false}>
                        {homeusers.map((e) => {
                            return (
                                <Card key={e._id} username={e.Name} email={e.Email} phone={e.Phone} id={e._id} user={user} />
                            )
                        })}
                    </ScrollView>
                }
                {
                   homeusers.length===0 && 
                   <View className="flex-1 items-center justify-center flex">
                        <Image source={require("../assets/nodata.png")} style={{width:90,height:90}}></Image>
                        <Text className="text-lg font-bold">No Data Found</Text>
                   </View>
                }

            </View>
            <StatusBar barStyle="light-content" backgroundColor="#00000090" />
        </ImageBackground>
    );
}
