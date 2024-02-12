import useNavigate from '@hooks/useNavigate';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useSendOtpNumberMutation} from '@store/apis/auth';
import {hp} from '@theme/ScreenDimensions';
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
  //  APIS
  const [SendOtp, {isLoading: isLoadingSendOtp}] = useSendOtpNumberMutation();

  // hooks
  const navigate = useNavigate();
  const toast = useShowToastMessage();
  // form hooks
  const formik = useFormik({
    initialValues: {
      mobile: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const res = await SendOtp({
          mobileNumber: values?.mobile,
        }).unwrap();
        console.log('res', res);
        navigate('numberOtpVerify', {...values, type: 'signIn'}, undefined);
        toast(res?.message);
      } catch (error: any) {
        toast(error?.data?.message || 'Something on the wrong ', 'error');
      }
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;
  //

  return (
    <Background type="scroll">
      <VStack px={4} flexGrow={1} justifyContent={'space-between'} pb={5}>
        {/* top */}
        <VStack>
          <AuthTopSection
            titleMt={5}
            arrowIcon={true}
            title="Enter Your Phone Number"
            subTitle="Please confirm your country code and enter your phone number"
          />

          {/* form input */}
          <FormControl
            isInvalid={Boolean(errors.mobile) && Boolean(touched.mobile)}>
            <Input
              placeholder="Phone Number"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'gray.700'}
              _focus={{bg: 'white', borderColor: Colors.lightGray1}}
              onChangeText={handleChange('mobile')}
              fontWeight={'400'}
              onBlur={handleBlur('mobile')}
              value={values.mobile}
              maxLength={11}
              mt={10}
              keyboardType="number-pad"
              _input={{
                background: Colors.lightGray1,
                borderColor: Colors.lightGray1,
              }}
            />
            <FormControl.ErrorMessage
              color="white"
              _text={{fontSize: 'xs', fontWeight: 500, color: '#ef1111'}}>
              {errors.mobile}
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>
        {/* footer */}
        <VStack mt={hp(10)}>
          <Button
            px={4}
            py={4}
            isLoading={isLoadingSendOtp}
            borderRadius={'full'}
            onPress={() => handleSubmit()}
            _text={{fontSize: 'md', color: 'white'}}
            background={Colors.buttonColor}>
            Continue
          </Button>
          <Button
            px={4}
            py={4}
            variant={'unstyled'}
            borderRadius={'full'}
            onPress={() => navigate('loginScreen')}
            _text={{fontSize: 'md', color: 'gray.800'}}>
            <HStack>
              <Text fontSize={'md'} mr={1} color={'gray.800'}>
                Sign in using your
              </Text>
              <Text fontSize={'md'} color={Colors.buttonColor}>
                Password
              </Text>
            </HStack>
          </Button>
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
