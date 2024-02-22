import useNavigate from '@hooks/useNavigate';
import {useGetSmaPlanQuery} from '@store/apis/sms';
import {VStack} from 'native-base';
import React from 'react';
import SmsPlanCard from 'src/components/cards/SmsPlanCard';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import InfiniteFlatList from 'src/components/shared/InfiniteFlatList';
import {SkeletonsScheduledCard} from 'src/components/skeletons';
import {IPropsSmsPlan} from 'src/typedef/navigation.types';
import asRoute from 'src/utils/withRoute';

const SmsPlanScreen = () => {
  const navigate = useNavigate();
  // State
  const [pageIndex, setPageIndex] = React.useState<number>(1);
  const [dataNew, setDataNew] = React.useState([]);
  // APS
  const props = `?page=${pageIndex}`;
  const {data, refetch, isLoading, isFetching} = useGetSmaPlanQuery(props);
  //  pageIndex set
  React.useEffect(() => {
    if (data) {
      if (data?.pagination?.current_page === 1) {
        setDataNew(data.data);
      } else {
        setDataNew((prevData): any => [...prevData, ...data.data]);
      }
    }
  }, [data, pageIndex]);

  return (
    <Background type="normal">
      <MainHeader title="Buy SMS" />
      <VStack px={2} pt={4} pb={10}>
        <InfiniteFlatList
          data={dataNew}
          listData={dataNew}
          onRefresh={() => {
            refetch();
            setPageIndex(1);
          }}
          renderItem={({item}) => (
            <SmsPlanCard
              onPress={() => navigate('payment', item)}
              item={item as IPropsSmsPlan}
            />
          )}
          showsVerticalScrollIndicator={false}
          onLoadMore={() => {
            if (data?.pagination?.current_page < data?.pagination.last_page) {
              setPageIndex(data?.pagination?.current_page + 1);
            }
          }}
          isOnLoadMore={true}
          isFetching={isFetching} // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            paddingBottom: 200,
          }}
          ListEmptyComponent={
            isLoading || isFetching ? (
              <VStack space={3}>
                <SkeletonsScheduledCard />
                <SkeletonsScheduledCard />
                <SkeletonsScheduledCard />
                <SkeletonsScheduledCard />
                <SkeletonsScheduledCard />
                <SkeletonsScheduledCard />
                <SkeletonsScheduledCard />
              </VStack>
            ) : (
              <></>
            )
          }
        />
      </VStack>
    </Background>
  );
};

const smsPlanScreen = asRoute(SmsPlanScreen, 'smsPlan', {
  animation: 'slide_from_right',
});

export default smsPlanScreen;
