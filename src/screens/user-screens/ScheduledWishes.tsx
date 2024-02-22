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
import {SkeletonsScheduledCard} from 'src/components/skeletons';
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

  const [pageIndex, setPageIndex] = React.useState<number>(1);
  const [isOpenModal, setIsOpenModal] = React.useState<boolean>(false);
  const [selectedWish, setSelectedWish] = React.useState<any>();
  const [dataNew, setDataNew] = React.useState([]);
  const [selectCate, setSelectCate] = React.useState<string>(
    category?.[0]?.value,
  );

  //  hooks
  const navigate = useNavigate();
  // APIS
  const props =
    selectCate === 'all'
      ? `?status=pending&page=${pageIndex}`
      : `?messageType=${selectCate}&status=pending&page=${pageIndex}`;
  //
  const {data, refetch, isLoading, isFetching} = useGetMyWishListQuery(props);

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

  // setSelectCate(item?.value)
  const onSelectCategory = (item: string) => {
    setDataNew([]);
    setPageIndex(1);
    setSelectCate(item);
  };

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
                onPress={() => onSelectCategory(item?.value)}
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
          key={selectCate}
          onRefresh={() => {
            refetch();
            setPageIndex(1);
          }}
          perPage={10}
          data={dataNew}
          listData={dataNew}
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
            if (data?.pagination?.current_page < data?.pagination.last_page) {
              setPageIndex(data?.pagination?.current_page + 1);
            }
          }}
          isOnLoadMore={true}
          isFetching={isFetching}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{
            paddingBottom: 130,
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
        type={'normal'}
      />
    </Background>
  );
};

const scheduledWishes = asRoute(ScheduledWishes, 'scheduledWishes', {
  animation: 'slide_from_right',
});

export default scheduledWishes;
