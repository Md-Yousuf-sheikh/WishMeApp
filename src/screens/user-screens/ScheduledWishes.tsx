import useNavigate from '@hooks/useNavigate';
import React from 'react';
import ScheduledCard from 'src/components/cards/ScheduledCard';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import InfiniteFlatList from 'src/components/shared/InfiniteFlatList';
import asRoute from 'src/utils/withRoute';

const ScheduledWishes = () => {
  const navigate = useNavigate();

  return (
    <Background type="normal">
      <MainHeader title="Scheduled Wishes" />
      <InfiniteFlatList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={({item}) => (
          <ScheduledCard
            onEditPress={() => navigate('updateWishes')}
            data={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        inverted
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
    </Background>
  );
};

const scheduledWishes = asRoute(ScheduledWishes, 'scheduledWishes', {
  animation: 'slide_from_right',
});

export default scheduledWishes;
