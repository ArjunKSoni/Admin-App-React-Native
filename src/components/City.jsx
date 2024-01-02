import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const CityDropdown = ({city,setCity}) => {
  return (
    <View className="mb-3">
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="Mumbai"
          status={city === 'Mumbai' ? 'checked' : 'unchecked'}
          onPress={() => setCity('Mumbai')}
        />
        <Text className="font-bold">Mumbai</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="Pune"
          status={city === 'Pune' ? 'checked' : 'unchecked'}
          onPress={() => setCity('Pune')}
        />
        <Text className="font-bold">Pune</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="Ahmedabad"
          status={city === 'Ahmedabad' ? 'checked' : 'unchecked'}
          onPress={() => setCity('Ahmedabad')}
        />
        <Text className="font-bold">Ahmedabad</Text>
      </View>
    </View>
  );
};

export default CityDropdown;
