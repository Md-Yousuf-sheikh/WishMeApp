/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  FlatList,
  HStack,
  Modal,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {hp, wp} from '@theme/ScreenDimensions';
import {SelectArrowIcon} from 'src/NativeBaseIcon';
import Colors from '@theme/colors';
import {
  useGetWishCategoryQuery,
  useGetWishWithTypeQuery,
} from '@store/apis/wish';

interface IProps {
  value?: any;
  setValue?: any;
}
interface IWishType {
  item: {
    id: string;
    message: string;
  };
  index: any;
}
interface IItemType {
  item: {
    name: string;
    id: string;
  };
  index: any;
}

export default function CustomWiseSelectPicker({value, setValue}: IProps) {
  // APIS
  const {data} = useGetWishCategoryQuery(null);
  // state
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState({
    wishTypeId: value?.wishTypeId ?? data?.data?.[0]?.id ?? 1,
    message: null,
  });
  // APIS
  const {data: wishes} = useGetWishWithTypeQuery(selectedValue?.wishTypeId);
  // hooks
  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Pressable
        onPress={() => setIsOpen(true)}
        rounded={'md'}
        bg={Colors.lightGray1}>
        <HStack justifyContent={'space-between'} alignItems={'center'} pl={2}>
          <Text
            color={value?.wishTypeId ? 'gray.800' : 'gray.400'}
            fontSize={'xs'}>
            {data?.data?.[Number(value?.wishTypeId) - 1]?.name}
          </Text>
          <SelectArrowIcon size={12} />
        </HStack>
      </Pressable>

      {/* Modal */}
      <Modal
        zIndex={99}
        isOpen={isOpen}
        onClose={onClose}
        justifyContent={'flex-end'}>
        <VStack
          w={wp(100)}
          h={hp(80)}
          p={3}
          bg={'white'}
          style={{
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}>
          <HStack justifyContent={'flex-end'}>
            <Pressable onPress={onClose} pr={1}>
              <Text color={'gray.400'}>Close</Text>
            </Pressable>
          </HStack>
          {/* title */}
          <Text fontSize={'xl'}>Select Wish Template</Text>
          <HStack alignItems={'center'} mt={5} space={2}>
            <FlatList
              data={data?.data}
              horizontal
              renderItem={({item}: IItemType) => {
                return (
                  <Button
                    p={2}
                    py={1}
                    mb={1}
                    onPress={() =>
                      setSelectedValue({
                        wishTypeId: item?.id,
                        message: null,
                      })
                    }
                    // shadow={1}
                    bgColor={
                      selectedValue?.wishTypeId === item?.id
                        ? Colors.primaryMain
                        : 'white'
                    }
                    _text={{
                      color:
                        selectedValue?.wishTypeId === item?.id
                          ? 'gray.200'
                          : 'gray.400',
                    }}>
                    {item?.name}
                  </Button>
                );
              }}
              showsHorizontalScrollIndicator={false}
            />
          </HStack>
          {/*  */}
          <VStack p={2} mt={3} rounded={'md'}>
            <FlatList
              data={wishes?.data}
              renderItem={({item}: IWishType) => {
                return (
                  <Button
                    p={2}
                    py={1}
                    onPress={() => {
                      setSelectedValue((prv): any => ({
                        wishTypeId: prv?.wishTypeId,
                        message: item?.message,
                      }));
                      setValue?.({
                        wishTypeId: selectedValue?.wishTypeId,
                        message: item?.message,
                      });
                      onClose();
                    }}
                    bgColor={
                      selectedValue?.message === item?.message
                        ? Colors.lightBlue
                        : 'gray.100'
                    }
                    _text={{
                      color:
                        selectedValue?.message === item?.message
                          ? 'gray.800'
                          : 'gray.500',
                    }}
                    rounded={'md'}
                    mb={3}>
                    {item?.message}
                  </Button>
                );
              }}
              style={{
                height: hp(63),
              }}
            />
          </VStack>
        </VStack>
      </Modal>
    </>
  );
}
