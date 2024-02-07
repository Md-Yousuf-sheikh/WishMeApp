import useNavigate from '@hooks/useNavigate';
import {VStack} from 'native-base';
import React from 'react';
import ScheduledCard from 'src/components/cards/ScheduledCard';
import SmsPlanCard from 'src/components/cards/SmsPlanCard';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import InfiniteFlatList from 'src/components/shared/InfiniteFlatList';
import asRoute from 'src/utils/withRoute';

const SmsPlanScreen = () => {
  const navigate = useNavigate();

  return (
    <Background type="normal">
      <MainHeader title="Buy SMS plan" />
      <VStack px={2}>
        <InfiniteFlatList
          data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => (
            <SmsPlanCard
              onEditPress={() => navigate('updateWishes')}
              data={item}
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

const smsPlanScreen = asRoute(SmsPlanScreen, 'smsPlanScreen', {
  animation: 'slide_from_right',
});

export default smsPlanScreen;