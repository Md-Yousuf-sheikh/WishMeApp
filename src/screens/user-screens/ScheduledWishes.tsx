import useNavigate from '@hooks/useNavigate';
import {hp} from '@theme/ScreenDimensions';
import Colors from '@theme/colors';
import {Button, HStack, VStack} from 'native-base';
import React from 'react';
import {ChatPlusIcon} from 'src/NativeBaseIcon';
import ScheduledCard from 'src/components/cards/ScheduledCard';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import InfiniteFlatList from 'src/components/shared/InfiniteFlatList';
import asRoute from 'src/utils/withRoute';

const category = [
  {
    value: 'all wish',
    title: 'All Wish',
  },
  {
    value: 'Form Mobile',
    title: 'Form Mobile',
  },
  {
    value: 'Form App',
    title: 'Form App',
  },
];

const ScheduledWishes = () => {
  //  State
  const [selectCate, setSelectCate] = React.useState<string>(
    category?.[0]?.value,
  );

  //  hooks
  const navigate = useNavigate();

  return (
    <Background
      type="scroll"
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
        bottom={5}
        backgroundColor={Colors.primaryMain}
        variant={'unstyled'}>
        <ChatPlusIcon size={6} />
      </Button>
      <VStack px={3} pt={3} position={'relative'}>
        {/* category */}
        <HStack space={3} pb={3}>
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
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => (
            <ScheduledCard
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

const scheduledWishes = asRoute(ScheduledWishes, 'scheduledWishes', {
  animation: 'slide_from_right',
});

export default scheduledWishes;
