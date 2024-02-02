import {Image, StyleSheet} from 'react-native';
import React from 'react';
import {Text, VStack} from 'native-base';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {GetV1RecipeGetSuccessfulResponse} from '@store/schema';
// export interface MealPlanInt {
//   item: GetV1RecipeGetSuccessfulResponse['data']['data'];
//   index: number;
// }

export default function MealPlanCard({index, item}: any) {
  return (
    <VStack
      key={index}
      justifyContent="center"
      px={2}
      style={{
        gap: 8,
      }}>
      <Image
        source={{uri: item?.photo}}
        style={{
          height: 200,
          borderRadius: 10,
          width: 150,
        }}
      />

      <Text fontSize="sm" fontWeight={600} color="black">
        {item?.name}
      </Text>
      {/* mark ion */}
      <BouncyCheckbox
        fillColor="#3CDB7F"
        unfillColor="#E1E0E6"
        iconStyle={{borderColor: '#FFFFFF'}}
        // onPress={() => setChecked(prev => !prev)}
        isChecked={true}
        size={20}
        style={{position: 'absolute', top: 0, right: -10}}
      />
    </VStack>
  );
}

const styles = StyleSheet.create({});
