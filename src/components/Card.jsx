import React from 'react';
import { View, Text, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { deleteuser } from '../api/Auth';

export default function Card({ username, email, phone, id, user }) {
    const navigation = useNavigation();
    const handleDelete = async () => {
        Alert.alert(
            'Confirm Deletion',
            `Are you sure you want to delete user ${username}`,
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Delete',
                    onPress: async () => {
                        const data = await deleteuser(id);
                        if (data) {
                            Alert.alert("User deleted", "user deleted successfully")
                            navigation.replace("home", { user })
                        }
                    },
                    style: 'destructive',
                },
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={{ elevation: 10 }} className="bg-green-400 my-5 flex flex-row items-center justify-between w-full rounded-lg px-7 py-4">
            <View>
                <Text className="text-xl font-bold">User Name</Text>
                <Text className="mb-2">{username}</Text>

                <Text className="text-xl font-bold">Email</Text>
                <Text className="mb-2">{email}</Text>

                <Text className="text-xl font-bold">Phone</Text>
                <Text className="mb-2">{phone}</Text>
            </View>
            <View className="flex justify-between gap-12">
                <AntDesign onPress={() => navigation.navigate("edit", { mode: "edit", id: id, name: username, email: email, phone: phone, user: user })} name="edit" size={24} color="black" />
                <AntDesign onPress={handleDelete} name="delete" size={24} color="black" />
            </View>
        </View>
    );
}
