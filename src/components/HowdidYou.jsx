import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';

const HowDidYouHearAboutUs = ({selectedOptions,setSelectedOptions}) => {
  const handleCheckboxToggle = (value) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];

    setSelectedOptions(updatedOptions);
  };

  return (
    <View className="mb-3">
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox.Android
          status={
            selectedOptions.includes('LinkedIn') ? 'checked' : 'unchecked'
          }
          onPress={() => handleCheckboxToggle('LinkedIn')}
        />
        <Text className="font-bold">LinkedIn</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox.Android
          status={selectedOptions.includes('Friends') ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle('Friends')}
        />
        <Text className="font-bold">Friends</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox.Android
          status={
            selectedOptions.includes('Job Portal') ? 'checked' : 'unchecked'
          }
          onPress={() => handleCheckboxToggle('Job Portal')}
        />
        <Text className="font-bold">Job Portal</Text>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox.Android
          status={selectedOptions.includes('Others') ? 'checked' : 'unchecked'}
          onPress={() => handleCheckboxToggle('Others')}
        />
        <Text className="font-bold">Others</Text>
      </View>
    </View>
  );
};

export default HowDidYouHearAboutUs;
