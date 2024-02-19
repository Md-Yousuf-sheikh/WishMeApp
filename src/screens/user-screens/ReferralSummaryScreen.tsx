import {useGetReferralQuery} from '@store/apis/userProfile';
import Colors from '@theme/colors';
import {Button, HStack, VStack} from 'native-base';
import React from 'react';
import WishViewModal from 'src/components/actionSheet/WishViewModal';
import ReferralCard from 'src/components/cards/ReferralCard';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import InfiniteFlatList from 'src/components/shared/InfiniteFlatList';
import {SkeletonsScheduledCard} from 'src/components/skeletons';
import {IPropsReferralItem} from 'src/typedef/navigation.types';
import asRoute from 'src/utils/withRoute';

const category = [
  {
    value: 'all',
    title: 'All Referral Link',
  },
  {
    value: 'active',
    title: 'Success',
  },
  {
    value: 'pending',
    title: 'Pending',
  },
];

const ReferralSummaryScreen = () => {
  //  State
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [selectedWish, setSelectedWish] = React.useState<any>();
  const [selectCate, setSelectCate] = React.useState<string>(
    category?.[0]?.value,
  );

  //  hooks
  // APIS
  const props =
    selectCate === 'all'
      ? ''
      : selectCate === 'pending'
      ? '?status=pending'
      : '?status=active';

  const {data, isLoading, isFetching} = useGetReferralQuery(props);
  console.log('data', data);

  return (
    <Background
      type="normal"
      scrollViewProps={{
        contentContainerStyle: {
          position: 'relative',
          flex: 1,
        },
      }}>
      <Header title="Referral Summary" />
      <VStack px={3} pt={3} position={'relative'}>
        {/* category */}
        <HStack space={3} pb={4} pt={1}>
          {category?.map((item, index) => {
            return (
              <Button
                key={index}
                p={2}
                py={1}
                onPress={() => setSelectCate(item?.value)}
                shadow={1}
                bgColor={
                  selectCate === item?.value ? Colors.primaryMain : 'white'
                }
                _text={{
                  color: selectCate === item?.value ? 'gray.200' : 'gray.400',
                }}>
                {item?.title}
              </Button>
            );
          })}
        </HStack>
        {/* list */}
        <InfiniteFlatList
          data={data?.data}
          renderItem={({item}) => (
            <ReferralCard
              data={item as IPropsReferralItem}
              onPress={() => {
                setSelectedWish(item);
                // setIsOpenModal(true);
              }}
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
      {/* Modals */}
      <WishViewModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        item={selectedWish}
        type={'log'}
      />
    </Background>
  );
};

const referralSummaryScreen = asRoute(
  ReferralSummaryScreen,
  'referralSummary',
  {
    title: 'Notification',
    animation: 'slide_from_right',
  },
);

export default referralSummaryScreen;
