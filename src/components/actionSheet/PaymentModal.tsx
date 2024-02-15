/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Box,
  Button,
  CheckIcon,
  HStack,
  Input,
  Modal,
  Pressable,
  Select,
  Text,
  VStack,
} from 'native-base';
import {wp} from '@theme/ScreenDimensions';
import Colors from '@theme/colors';
import useNavigate from '@hooks/useNavigate';
import {IPropsSmsPlan} from 'src/typedef/navigation.types';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface IProps {
  isOpen: boolean;
  type?: 'log' | 'normal';
  onClose: () => void;
  item: IPropsSmsPlan;
}

export default function PaymentModal({isOpen, onClose, item}: IProps) {
  //  state
  const [mfs, setMfs] = React.useState<string>();
  const [transaction, setTransaction] = React.useState<string>();
  // hooks
  const navigate = useNavigate();
  //  formik
  const handelEditNav = () => {
    navigate('updateWishes', item);
    onClose();
  };

  return (
    <Modal
      zIndex={99}
      isOpen={isOpen}
      onClose={onClose}
      justifyContent={'flex-end'}>
      <VStack
        w={wp(100)}
        minH="50%"
        p={3}
        bg={'white'}
        style={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}>
        <KeyboardAwareScrollView>
          <HStack justifyContent={'flex-end'}>
            <Pressable onPress={onClose} pr={1}>
              <Text color={'gray.400'}>Close</Text>
            </Pressable>
          </HStack>
          {/* title */}
          <Text textAlign={'center'} color={'gray.500'} fontSize={'lg'}>
            Make payment offline
          </Text>
          <Text textAlign={'center'} color={'gray.500'} mt={3} fontSize={'md'}>
            Please submit your bKash or Nagad transaction ID. Your plan will be
            activated soon after verifying your payment.
          </Text>
          <Text textAlign={'center'} color={'gray.500'} mt={3} fontSize={'md'}>
            You can send money to 01316100183.
          </Text>

          <Box mt={3}>
            <Select
              selectedValue={mfs}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setMfs(itemValue)}>
              <Select.Item label="Bkash" value="bkash" />
              <Select.Item label="Nogad" value="nogad" />
            </Select>
          </Box>
          <Box mt={5}>
            <Input
              placeholder="Transaction ID (Required)"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'gray.700'}
              _focus={{bg: 'white', borderColor: Colors.lightGray1}}
              onChangeText={v => setTransaction(v)}
              fontWeight={'400'}
              value={transaction}
            />
          </Box>
          <Text fontSize={'lg'} textAlign={'center'} color={'black'} py={5}>
            Amount: ৳{item?.salePrice}
          </Text>
          {/* button */}
          <Button
            py={3}
            mb={20}
            bg={Colors.primaryMain}
            onPress={handelEditNav}
            rounded={'md'}
            _focus={{
              backgroundColor: Colors.primaryMain,
            }}
            _pressed={{
              backgroundColor: Colors.primaryMain,
            }}
            _text={{
              fontSize: 'md',
            }}>
            Submit
          </Button>
        </KeyboardAwareScrollView>
      </VStack>
    </Modal>
  );
}
