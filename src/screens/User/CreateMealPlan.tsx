import React from 'react';
import {Button, HStack, Image, ScrollView, Text, VStack} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useUpdateMealPlanMutation} from '@store/apis/mealPlan';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {PostV1MealPlanUpdateErrorResponse} from '@store/schema';
import MealPlanCard from 'src/components/meal-plan/MealPlanCard';
import {useGetAllRecipeQuery} from '@store/apis/recipe';

const dailyMicros = [
  {
    title: 'Calories',
    value: '1800',
    image: require('@assets/images/calories.png'),
  },
  {
    title: 'Protein',
    value: '150g',
    image: require('@assets/images/protein.png'),
  },
  {
    title: 'Carbs',
    value: '300g',
    image: require('@assets/images/carbs.png'),
  },
  {
    title: 'Fat',
    value: '50g',
    image: require('@assets/images/fat.png'),
  },
  {
    title: 'Fiber',
    value: '220g',
    image: require('@assets/images/fiber.png'),
  },
  {
    title: 'Water',
    value: '2.4l',
    image: require('@assets/images/water.png'),
  },
];

const dayTabs = [
  {
    title: 'Mon',
    key: 'Mon',
  },
  {
    title: 'Tue',
    key: 'Tue',
  },
  {
    title: 'Wed',
    key: 'Wed',
  },
  {
    title: 'Thu',
    key: 'Thu',
  },
  {
    title: 'Fri',
    key: 'Fri',
  },
  {
    title: 'Sat',
    key: 'Sat',
  },
  {
    title: 'Sun',
    key: 'Sun',
  },
];

const snacks = [
  {
    title: 'Pan Cake',
    image:
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
  {
    title: 'Pasta',
    image:
      'https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1980&q=80',
  },
  {
    title: 'Salad',
    image:
      'https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  },
];

export default function CreateMealPlan() {
  const [activeTab, setActiveTab] = React.useState('Mon');
  const navigate = useNavigation();
  const [mealPlanData, setMealPlanData] = React.useState([]);
  // Hooks
  const toast = useShowToastMessage();
  // APIS

  const [handelCreate, {isLoading}] = useUpdateMealPlanMutation();
  const {data} = useGetAllRecipeQuery();
  const handleSubmit = async () => {
    const body = {};
    try {
      const res = await handelCreate(body).unwrap();
      console.log('res', res);
      toast(res?.data?.message);
    } catch (err) {
      console.log('err', err);
      const error = err as PostV1MealPlanUpdateErrorResponse;
      toast(error?.error?.message, 'error');
    }
  };
  // data

  console.log('data', JSON.stringify(data));

  return (
    <ScrollView
      nestedScrollEnabled={true}
      _contentContainerStyle={{
        flexGrow: 1,
        bg: '#F8F8F8',
        gap: 4,
        paddingVertical: 16,
      }}>
      <VStack space={4}>
        <Text color="black" fontSize="lg" fontWeight={700} px="4">
          Breakfast
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            mb: 4,
          }}>
          <HStack space="2" pb="4" px={2}>
            {data?.data?.data
              ?.filter(it => it?.mealType === 'Breakfast')
              .map((item, index) => (
                <MealPlanCard index={index} item={item} />
              ))}
          </HStack>
        </ScrollView>
      </VStack>
      <VStack space={4}>
        <Text color="black" fontSize="lg" fontWeight={700} px="4">
          Lunch
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            mb: 4,
          }}>
          <HStack space="2" pb="4" px={2}>
            {data?.data?.data
              ?.filter(it => it?.mealType === 'Lunch')
              .map((item, index) => (
                <MealPlanCard index={index} item={item} />
              ))}
          </HStack>
        </ScrollView>
      </VStack>
      <VStack space={4}>
        <Text color="black" fontSize="lg" fontWeight={700} px="4">
          Dinner
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{
            mb: 4,
          }}>
          <HStack space="2" pb="4" px={2}>
            {data?.data?.data
              ?.filter(it => it?.mealType === 'Dinner')
              ?.map((item, index) => (
                <MealPlanCard index={index} item={item} />
              ))}
          </HStack>
        </ScrollView>
      </VStack>
      <Button
        w="full"
        bg={'secondary.100'}
        rounded={8}
        py={3}
        _text={{color: 'black', fontWeight: 700}}
        _pressed={{bg: '#68696B90'}}
        onPress={handleSubmit}
        isLoading={isLoading}>
        Save
      </Button>
    </ScrollView>
  );
}
