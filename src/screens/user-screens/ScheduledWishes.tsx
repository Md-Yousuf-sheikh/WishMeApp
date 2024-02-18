import useNavigate from '@hooks/useNavigate';
import {useGetMyWishListQuery} from '@store/apis/userProfile';
import Colors from '@theme/colors';
import {Button, HStack, VStack} from 'native-base';
import React from 'react';
import {ChatPlusIcon} from 'src/NativeBaseIcon';
import WishViewModal from 'src/components/actionSheet/WishViewModal';
import ScheduledCard from 'src/components/cards/ScheduledCard';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import InfiniteFlatList from 'src/components/shared/InfiniteFlatList';
import {IPropsWishItem} from 'src/typedef/navigation.types';
import asRoute from 'src/utils/withRoute';

const category = [
  {
    value: 'all',
    title: 'All Wish',
  },
  {
    value: 'mobile',
    title: 'Form Mobile',
  },
  {
    value: 'app',
    title: 'Form App',
  },
];

const ScheduledWishes = () => {
  //  State
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [selectedWish, setSelectedWish] = React.useState<any>();
  const [selectCate, setSelectCate] = React.useState<string>(
    category?.[0]?.value,
  );

  //  hooks
  const navigate = useNavigate();
  // APIS
  const props =
    selectCate === 'all'
      ? '?status=pending'
      : `?messageType=${selectCate}&status=pending`;
  const {data, refetch} = useGetMyWishListQuery(props);
  // data

  return (
    <Background
      type="normal"
      scrollViewProps={{
        contentContainerStyle: {
          position: 'relative',
          flex: 1,
        },
      }}>
      <Header title="Scheduled Wishes" arrowLeft={false} />
      <Button
        p={4}
        zIndex={9999}
        right={4}
        position={'absolute'}
        rounded={'full'}
        shadow={10}
        bottom={16}
        backgroundColor={Colors.primaryMain}
        onPress={() => navigate('createWishes')}
        variant={'unstyled'}>
        <ChatPlusIcon size={6} />
      </Button>
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
          onRefresh={refetch}
          // isRefreshing={true}
          data={data?.data}
          renderItem={({item}) => (
            <ScheduledCard
              onEditPress={() => navigate('updateWishes')}
              data={item as IPropsWishItem}
              onPress={() => {
                setSelectedWish(item);
                setIsOpenModal(true);
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
        />
      </VStack>
      {/* Modals */}
      <WishViewModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        item={selectedWish}
        type={'normal'}
      />
    </Background>
  );
};

const scheduledWishes = asRoute(ScheduledWishes, 'scheduledWishes', {
  animation: 'slide_from_right',
});

export default scheduledWishes;
