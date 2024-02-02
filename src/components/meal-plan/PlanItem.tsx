import React from 'react';
import {Text, VStack} from 'native-base';
import {fontSizes} from '@theme/typography';
import {GetV1RecipeGetIdSuccessfulResponse} from '@store/schema';
import RecipeCard from './RecipeCard';

export interface Ingredient {
  _id?: string;
  name?: string;
  category?: string;
  unit?: Unit;
  micronutrient?: Micronutrient[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Unit {
  quantity: number;
  unit: string;
}

export interface Micronutrient {
  quantity: number;
  unit: string;
  name: string;
}

interface Props {
  items?: GetV1RecipeGetIdSuccessfulResponse['data']['data'][];
  title?: string;
  id?: string;
}

export default function PlanItem({items, title, id}: Props) {
  return (
    <VStack space="2">
      {items?.length > 0 && (
        <Text fontSize={fontSizes.lg} fontWeight={700} color="black">
          {title}
        </Text>
      )}
      {items?.map((item, index) => {
        return <RecipeCard index={index} item={item} />;
      })}
    </VStack>
  );
}
