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
import {hp, wp} from '@theme/ScreenDimensions';
import Colors from '@theme/colors';
import useNavigate from '@hooks/useNavigate';
import {IPropsSmsPlan} from 'src/typedef/navigation.types';
import {Keyboard, KeyboardAvoidingView} from 'react-native';
import {useOrderSmsPlanMutation} from '@store/apis/sms';
import {SuccessIcon} from 'src/NativeBaseIcon';
import useShowToastMessage from '@hooks/useShowToastMessage';

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
  const [paymentSuccess, setPaymentSuccess] = React.useState<boolean>(false);
  // APIS
  const [handelPay, {isLoading}] = useOrderSmsPlanMutation();
  // hooks
  const navigate = useNavigate();
  const toast = useShowToastMessage();
  //  formik
  const handelPayment = async () => {
    Keyboard.dismiss();
    const props = {
      smsPlanId: item?.smsPlanNumber,
      transactionId: transaction,
      paymentType: 'offline',
      paymentMethod: mfs,
      promoCode: '',
      price: item?.salePrice,
    };
    try {
      const res = await handelPay(props).unwrap();
      console.log('res', res?.data?.message);
      setPaymentSuccess(true);
    } catch (err: any) {
      // console.log('err', err);
      toast(err?.data?.message || err?.message, 'error');
    }
  };

  // handel close
  const HandelClose = () => {
    if (paymentSuccess) {
      navigate(undefined, undefined, 'goBack');
      //  onClose();
      onClose();
      setPaymentSuccess(false);
    } else {
      onClose();
    }
  };
  return (
    <Modal
      zIndex={99}
      isOpen={isOpen}
      onClose={HandelClose}
      justifyContent={paymentSuccess ? 'center' : 'flex-end'}>
      <>
        {paymentSuccess ? (
          <VStack w={'full'} px={2}>
            <VStack
              bg={'white'}
              alignItems={'center'}
              p={4}
              py={'12'}
              space={4}
              rounded={'2xl'}>
              <SuccessIcon size={24} />
              <Text textAlign={'center'} color={'gray.800'} fontSize={'2xl'}>
                Congratulations
              </Text>
              <Text textAlign={'center'} color={'gray.500'} fontSize={'md'}>
                Payment completed successfully.
              </Text>
              <Button
                py={3}
                bg={Colors.primaryMain}
                onPress={HandelClose}
                rounded={'full'}
                w={'full'}
                _focus={{
                  backgroundColor: Colors.primaryMain,
                }}
                _pressed={{
                  backgroundColor: Colors.primaryMain,
                }}
                isLoading={isLoading}
                _text={{
                  fontSize: 'md',
                }}>
                Continue
              </Button>
            </VStack>
          </VStack>
        ) : (
          <KeyboardAvoidingView behavior="padding" enabled>
            <VStack
              w={wp(100)}
              minH="50%"
              p={3}
              bg={'white'}
              style={{
                borderTopRightRadius: 30,
                borderTopLeftRadius: 30,
                marginBottom: hp(-8),
              }}>
              <>
                <HStack justifyContent={'flex-end'}>
                  <Pressable onPress={HandelClose} pr={1}>
                    <Text color={'gray.400'}>Close</Text>
                  </Pressable>
                </HStack>
                {/* title */}
                <Text textAlign={'center'} color={'gray.500'} fontSize={'lg'}>
                  Make payment offline
                </Text>
                <Text
                  textAlign={'center'}
                  color={'gray.500'}
                  mt={3}
                  fontSize={'md'}>
                  Please submit your bKash or Nagad transaction ID. Your plan
                  will be activated soon after verifying your payment.
                </Text>
                <Text
                  textAlign={'center'}
                  color={'gray.500'}
                  mt={3}
                  fontSize={'md'}>
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
                    <Select.Item label="Nagad" value="Nagad" />
                    <Select.Item label="Rocket" value="Rocket" />
                    <Select.Item label="SureCash" value="SureCash" />
                    <Select.Item label="Upay" value="Upay" />
                    <Select.Item label="Tap" value="Tap" />
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
                <Text
                  fontSize={'lg'}
                  textAlign={'center'}
                  color={'black'}
                  py={5}>
                  Amount: ৳{item?.salePrice}
                </Text>
                {/* button */}
                <Button
                  py={3}
                  mb={20}
                  bg={Colors.primaryMain}
                  onPress={handelPayment}
                  rounded={'md'}
                  _focus={{
                    backgroundColor: Colors.primaryMain,
                  }}
                  _pressed={{
                    backgroundColor: Colors.primaryMain,
                  }}
                  isLoading={isLoading}
                  _text={{
                    fontSize: 'md',
                  }}>
                  Submit
                </Button>
              </>
            </VStack>
          </KeyboardAvoidingView>
        )}
      </>
    </Modal>
  );
}
