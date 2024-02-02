import React from 'react';
import {Pressable, Text, VStack} from 'native-base';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {fontSizes} from '@theme/typography';
import {GetV1RecipeGetIdSuccessfulResponse} from '@store/schema';
import {Image} from 'react-native';
import {useGetSingleRecipeByIdQuery} from '@store/apis/recipe';

export interface RecipeInt {
  item: GetV1RecipeGetIdSuccessfulResponse['data']['data'];
  index: number;
}

export default function RecipeCard({item, index}: RecipeInt) {
  const {data, error} = useGetSingleRecipeByIdQuery(item?._id);
  // console.log('RecipeCard Recipe', data?.data?.data?.quantityByMicroNutrient);
  const description = data?.data?.data?.quantityByMicroNutrient
    ?.map(item => `${item?.quantity}${item?.unit} ${item?.name} .`)
    ?.join(' ');
  return (
    <Pressable
      // onPress={() => setChecked(prev => !prev)}
      display="flex"
      flexDirection="row"
      gap={4}
      bg="#FFFFFF"
      rounded="xl"
      p={2}
      key={item?.name + index}
      position={'relative'}>
      <Image
        source={{
          uri:
            item?.photo ||
            'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
        }}
        style={{
          width: 65,
          height: 70,
          borderRadius: 10,
        }}
      />
      <VStack justifyContent="space-between" py={2}>
        <Text
          fontSize={fontSizes.md}
          fontWeight={700}
          color="black"
          numberOfLines={1}
          maxW={230}>
          {item?.name}
        </Text>
        <Text fontSize="xs" fontWeight={600} color="gray.2" numberOfLines={1}>
          {description}
        </Text>
      </VStack>
      {/* <BouncyCheckbox
        fillColor="#3CDB7F"
        unfillColor="#E1E0E6"
        iconStyle={{borderColor: '#FFFFFF'}}
        onPress={() => setChecked(prev => !prev)}
        isChecked={checked}
        size={20}
        style={{position: 'absolute', top: 15, right: 0}}
      /> */}
    </Pressable>
  );
}
