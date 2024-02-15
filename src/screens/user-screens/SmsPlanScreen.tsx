import useNavigate from '@hooks/useNavigate';
import {useGetSmaPlanQuery} from '@store/apis/sms';
import {VStack} from 'native-base';
import React from 'react';
import SmsPlanCard from 'src/components/cards/SmsPlanCard';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import InfiniteFlatList from 'src/components/shared/InfiniteFlatList';
import {IPropsSmsPlan} from 'src/typedef/navigation.types';
import asRoute from 'src/utils/withRoute';

const SmsPlanScreen = () => {
  const navigate = useNavigate();
  // APS
  const {data} = useGetSmaPlanQuery(undefined);

  return (
    <Background type="normal">
      <MainHeader title="Buy SMS" />
      <VStack px={2} pt={4} pb={10}>
        <InfiniteFlatList
          data={data?.data}
          renderItem={({item}) => (
            <SmsPlanCard
              onPress={() => navigate('payment', item)}
              item={item as IPropsSmsPlan}
            />
          )}
          showsVerticalScrollIndicator={false}
          // inverted
          onLoadMore={() => {
            // Implement your logic to load more data
          }}
          isFetching={false} // Set this to true when you are fetching data to prevent multiple requests
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            justifyContent: 'flex-end',
            rowGap: 2,
            paddingBottom: 100,
          }}
        />
      </VStack>
    </Background>
  );
};

const smsPlanScreen = asRoute(SmsPlanScreen, 'smsPlan', {
  animation: 'slide_from_right',
});

export default smsPlanScreen;
