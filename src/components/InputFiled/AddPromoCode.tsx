import Colors from '@theme/colors';
import {Box, HStack, Link, Pressable, Text, VStack} from 'native-base';
import React from 'react';

type Props = {
  setFieldValue?: any;
  value?: any;
};

export default function AddPromoCode({setFieldValue}: Props) {
  return (
    <VStack>
      <VStack mt={3} space={3}>
        {/* online pay */}
        <Pressable isDisabled={true} onPress={() => setFieldValue('online')}>
          <Text fontSize={'md'}>
            Do you have any promo code?{' '}
            <Text color={Colors.primaryMain}>Enter it here</Text>
          </Text>
        </Pressable>
      </VStack>
    </VStack>
  );
}
