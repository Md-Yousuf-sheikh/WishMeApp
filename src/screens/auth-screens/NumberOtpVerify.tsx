import useNavigate from '@hooks/useNavigate';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {Button, FormControl, HStack, Input, VStack, Text} from 'native-base';
import React from 'react';
import AuthTopSection from 'src/components/common/AuthTopSection';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';
import * as Yup from 'yup';
import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width * 0.8;
const INPUT_BOX_WIDTH = Math.floor(WIDTH / 6.5);

const validationSchema = Yup.object().shape({
  otp: Yup.number().required('Otp is required!'),
});

const NumberOtpVerify = () => {
  // hooks
  const navigate = useNavigate();
  // form hooks

  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema,
    onSubmit: async values => {
      console.log('valueseee', values);
      navigate('numberOtpVerify', values, undefined);
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;
  const handleResentCode = () => {};
  console.log('errors.otp', errors.otp);

  return (
    <Background>
      <VStack px={4} flexGrow={1} justifyContent={'space-between'} pb={5}>
        {/* top */}
        <VStack>
          <AuthTopSection title="Confirm code received" />

          {/* form input */}
          <FormControl isInvalid={Boolean(errors.otp) && Boolean(touched.otp)}>
            <Input
              borderColor={Colors.primaryMain}
              rounded={8}
              placeholder="00000"
              placeholderTextColor={'gray.2'}
              color={'gray.700'}
              onChangeText={handleChange('otp')}
              fontWeight={'400'}
              onBlur={handleBlur('otp')}
              value={values.otp}
              fontSize={'4xl'}
              mt={5}
              keyboardType="number-pad"
              maxLength={5}
              letterSpacing={INPUT_BOX_WIDTH}
              _focus={{bg: 'white', borderColor: Colors.primaryMain}}
              _input={{
                background: '#ffffff',
              }}
            />
            <FormControl.ErrorMessage
              color="red.500"
              _text={{fontSize: 'sm', fontWeight: 500, color: 'red'}}>
              {errors.otp}
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>
        {/* footer */}
        <VStack>
          <HStack justifyContent={'space-between'}>
            <Button
              px={4}
              py={2}
              borderRadius={'full'}
              onPress={() => handleSubmit()}
              _text={{fontSize: 'md', color: 'white'}}
              background={Colors.primaryMain}>
              Next
            </Button>
            <Button
              px={4}
              py={4}
              onPress={handleResentCode}
              variant={'unstyled'}
              flexDir={'row'}>
              <HStack alignItems={'center'} space={2}>
                <Text
                  fontFamily={'body'}
                  color={'black'}
                  fontSize={'md'}
                  mt={-1}>
                  RESEND CODE
                </Text>
                {/* <ArrowUpIcon width={25} height={20} /> */}
              </HStack>
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Background>
  );
};

const numberOtpVerify = asRoute(NumberOtpVerify, 'numberOtpVerify', {
  title: 'NumberOtpVerify',
  animation: 'slide_from_right',
});

export default numberOtpVerify;
