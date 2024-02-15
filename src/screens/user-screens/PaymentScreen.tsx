import {useRoute} from '@react-navigation/native';
import Colors from '@theme/colors';
import {Button, HStack, Text, VStack} from 'native-base';
import React, {useState} from 'react';
import AddPromoCode from 'src/components/InputFiled/AddPromoCode';
import SelectPaymentMethod from 'src/components/InputFiled/SelectPaymentMethod';
import SmsPlanCard from 'src/components/cards/SmsPlanCard';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import {IPropsSmsPlan} from 'src/typedef/navigation.types';
import asRoute from 'src/utils/withRoute';

const PaymentScreen = () => {
  const [openPay, setopenPay] = useState<boolean>(false);
  // Hooks
  // const navigate = useNavigate();
  const item = useRoute().params as IPropsSmsPlan;

  return (
    <Background type="normal">
      <MainHeader title="Payment" />
      <VStack px={3} pt={4}>
        <SmsPlanCard item={item} bg={true} />
        <SelectPaymentMethod value={'offline'} setFieldValue={() => {}} />
        <AddPromoCode />
        {/* Order Summary */}
        <VStack mt={5}>
          <Text pb={3} fontSize={'lg'}>
            Order Summary
          </Text>
          {/* table */}
          <VStack
            bg={'gray.50'}
            borderWidth={1}
            borderColor={'gray.100'}
            rounded={'md'}
            space={3}
            p={3}>
            <HStack justifyContent={'space-between'}>
              <Text fontSize={'md'} color={'gray.500'}>
                Subtotal
              </Text>
              <Text fontSize={'md'} color={'gray.500'}>
                ৳ {item?.salePrice}
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text fontSize={'md'} color={'gray.500'}>
                Promo Code
              </Text>
              <Text fontSize={'md'} color={'gray.500'}>
                ৳ 0.00
              </Text>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Text fontSize={'md'} color={'black'} fontWeight={'medium'}>
                Amount To Pay
              </Text>
              <Text fontSize={'md'} color={'black'} fontWeight={'medium'}>
                ৳ {item?.salePrice}
              </Text>
            </HStack>
          </VStack>
        </VStack>
        {/* Button */}
        <Button
          backgroundColor={Colors.primaryMain}
          _pressed={{
            bg: 'gray.300',
          }}
          rounded={'full'}
          py={4}
          mt={10}>
          Payment
        </Button>
      </VStack>
      {/* Modal */}
    </Background>
  );
};

const paymentScreen = asRoute(PaymentScreen, 'payment', {
  animation: 'slide_from_right',
});

export default paymentScreen;
