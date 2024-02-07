import useNavigate from '@hooks/useNavigate';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {Button, FormControl, HStack, Input, VStack, Text} from 'native-base';
import React from 'react';
import AuthTopSection from 'src/components/common/AuthTopSection';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(
      /^(\+88|88)?(01[3-9]\d{8})$/,
      'Please enter a valid Bangladeshi phone number',
    )
    .required('Phone number is required'),
});

const SignInWithNumber = () => {
  // hooks
  const navigate = useNavigate();
  // form hooks

  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      console.log('values', values);
      navigate('numberOtpVerify', values, undefined);
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  return (
    <Background type="scroll">
      <VStack px={4} flexGrow={1} justifyContent={'space-between'} pb={5}>
        {/* top */}
        <VStack>
          <AuthTopSection title="Your phone number" />

          {/* form input */}
          <FormControl
            isInvalid={Boolean(errors.mobile) && Boolean(touched.mobile)}>
            <Input
              borderColor={Colors.primaryMain}
              placeholder="Mobile"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'gray.700'}
              _focus={{bg: 'white', borderColor: Colors.primaryMain}}
              onChangeText={handleChange('mobile')}
              fontWeight={'400'}
              onBlur={handleBlur('mobile')}
              value={values.mobile}
              fontSize={'4xl'}
              maxLength={11}
              mt={5}
              keyboardType="number-pad"
              _input={{
                background: '#ffffff',
                borderColor: Colors.primaryMain,
              }}
            />
            <FormControl.ErrorMessage
              color="white"
              _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
              {errors.mobile}
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
              background={Colors.buttonColor}>
              Next
            </Button>
            <Button
              px={4}
              py={4}
              onPress={() => navigate('signInWithNumber')}
              variant={'unstyled'}
              flexDir={'row'}>
              <HStack alignItems={'center'} space={2}>
                <Text
                  fontFamily={'body'}
                  color={'black'}
                  fontSize={'md'}
                  mt={-1}>
                  Sign In with password
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

const signInWithNumber = asRoute(SignInWithNumber, 'signInWithNumber', {
  title: 'SignInWithNumber',
  animation: 'slide_from_right',
});

export default signInWithNumber;
