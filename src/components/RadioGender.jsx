import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

const GenderSelection = ({gender,setGender}) => {
  return (
    <View className="mb-3">
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="male"
          status={gender === 'male' ? 'checked' : 'unchecked'}
          onPress={() => setGender('male')}
        />
        <Text className="font-bold">Male</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="female"
          status={gender === 'female' ? 'checked' : 'unchecked'}
          onPress={() => setGender('female')}
        />
        <Text className="font-bold">Female</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="others"
          status={gender === 'others' ? 'checked' : 'unchecked'}
          onPress={() => setGender('others')}
        />
        <Text className="font-bold">Others</Text>
      </View>
    </View>
  );
};

export default GenderSelection;
