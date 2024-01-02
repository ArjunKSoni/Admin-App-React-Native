import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const StateSearchBox = ({searchQuery,setSearchQuery}) => {
    
    const [suggestions, setSuggestions] = useState([]);
    const [options, setOptions] = useState([
        'Gujarat',
        'Maharashtra',
        'Karnataka',
    ]);

    const handleSearch = (text) => {
        setSearchQuery(text);
        if (text !== '') {
            const filteredSuggestions = options.filter((state) =>
                state.toLowerCase().includes(text.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="Type to search..."
                value={searchQuery}
                className="text-lg rounded-lg font-bold"
                onChangeText={handleSearch}
            />
            <FlatList
                style={styles.suggestionsList}
                data={suggestions}
                renderItem={({ item }) => <Text className="text-lg font-bold" onPress={()=>{setSearchQuery(item);setSuggestions([])}} style={styles.suggestionItem}>{item}</Text>}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    textInput: {
        elevation:20,
        height: 40,
        backgroundColor: '#ffffff90',
        paddingLeft: 8,
    },
    suggestionsList: {
        marginTop: 10,
    },
    suggestionItem: {
        padding: 10,
        fontSize: 16,
    },
});

export default StateSearchBox;
