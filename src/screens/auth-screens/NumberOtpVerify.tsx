import useNavigate from '@hooks/useNavigate';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {Button, HStack, VStack, Text, FormControl} from 'native-base';
import React from 'react';
import AuthTopSection from 'src/components/common/AuthTopSection';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';
import * as Yup from 'yup';
import OtpInputs from 'react-native-otp-inputs';
import {StyleSheet} from 'react-native';
import FontSize from '@theme/FontSize';
import {useRoute} from '@react-navigation/native';
import {
  useLoginWithOtpMutation,
  useRegisterMutation,
  useSendOtpNumberMutation,
  useVerifyNumberOtpMutation,
} from '@store/apis/auth';
import useShowToastMessage from '@hooks/useShowToastMessage';

//
// const WIDTH = Dimensions.get('window').width * 0.8;
// const INPUT_BOX_WIDTH = Math.floor(WIDTH / 6);

const validationSchema = Yup.object().shape({
  otp: Yup.number().required('Otp is required!'),
});

const NumberOtpVerify = () => {
  // hooks
  const route = useRoute().params as any;
  const navigate = useNavigate();
  const toast = useShowToastMessage();
  // APIS
  //  APIS
  const [VerifyOtp, {}] = useVerifyNumberOtpMutation();
  const [loginWithVerifyOtp, {error}] = useLoginWithOtpMutation();
  const [SendOtp, {}] = useSendOtpNumberMutation();

  // form hooks
  const formik = useFormik({
    initialValues: {
      otp: '',
    },
    validationSchema,
    onSubmit: async values => {
      if (route?.type === 'signIn') {
        try {
          const res = await loginWithVerifyOtp({
            mobileNumber: route?.mobile,
            otp: values?.otp,
          }).unwrap();
          toast(res?.message);
        } catch (err: any) {
          toast(
            err?.data?.message || 'Something on the wrong sign in',
            'error',
          );
        }
      } else if (route?.type === 'signUp') {
        try {
          const res = await VerifyOtp({
            mobileNumber: route?.mobile,
            otp: values?.otp,
          }).unwrap();
          handelRegister();
          toast(res?.message);
        } catch (err: any) {
          toast(
            err?.data?.message || 'Something on the wrong sign up',
            'error',
          );
        }
      } else {
        try {
          const res = await VerifyOtp({
            mobileNumber: route?.mobile,
            otp: values?.otp,
          }).unwrap();
          toast(res?.message);
          navigate('loginScreen');
        } catch (err: any) {
          toast(
            err?.data?.message || 'Something on the wrong otp verification ',
            'error',
          );
        }
      }
    },
  });

  const {values, errors, touched, handleSubmit, setFieldValue} = formik;

  console.log('error', error);
  //
  const handleResentCode = async () => {
    // mobileNumber
    try {
      const res = await SendOtp({
        mobileNumber: route?.mobile,
      }).unwrap();
      console.log('res', res);
      toast(res?.message);
    } catch (err: any) {
      toast(err?.data?.message || 'Something on the wrong ', 'error');
    }
  };
  //
  const [handelSignUp] = useRegisterMutation();
  const handelRegister = async () => {
    try {
      const res = await handelSignUp(route?.formDataProps).unwrap();
      toast(res?.message);
      // formik.resetForm();
      navigate('loginScreen');
    } catch (err: any) {
      toast(err?.data?.message || 'Something on the wrong ', 'error');
    }
  };
  return (
    <Background type="scroll">
      <VStack px={4} flexGrow={1} justifyContent={'space-between'} pb={5}>
        {/* top */}
        <VStack>
          <AuthTopSection
            titleMt={5}
            arrowIcon={true}
            title="Enter Code"
            subTitle={`We have sent you an SMS with the code to +88${route?.mobile}`}
          />

          {/* form input */}
          <FormControl isInvalid={Boolean(errors.otp) && Boolean(touched.otp)}>
            <HStack
              py={10}
              alignSelf={'center'}
              width={'70%'}
              justifyContent={'center'}
              alignItems={'center'}>
              <OtpInputs
                autofillFromClipboard={true}
                handleChange={v => setFieldValue('otp', v)}
                numberOfInputs={4}
                inputStyles={[styles.inputStyle]}
                onEndEditing={() => {
                  if (values?.otp?.length >= 4) {
                    handleSubmit();
                  }
                }}
              />
            </HStack>
            <FormControl.ErrorMessage
              color="white"
              _text={{fontSize: 'xs', fontWeight: 500, color: '#ef1111'}}>
              {errors.otp}
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>
        {/* footer */}
        <VStack>
          <HStack justifyContent={'center'}>
            <Button
              px={4}
              py={4}
              onPress={handleResentCode}
              variant={'unstyled'}
              flexDir={'row'}>
              <HStack alignItems={'center'} space={2}>
                <Text
                  fontFamily={'body'}
                  color={Colors.primaryMain}
                  fontSize={'md'}
                  mt={-1}>
                  Resend Code
                </Text>
                {/* <ArrowUpIcon width={25} height={20} /> */}
              </HStack>
            </Button>
          </HStack>
          {/* <Button
            px={4}
            py={2}
            borderRadius={'full'}
            onPress={() => handleSubmit()}
            _text={{fontSize: 'md', color: 'white'}}
            background={Colors.buttonColor}>
            Next
          </Button> */}
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

const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0,
    backgroundColor: '#e1e1e149',
    height: 50,
    width: 50,
    color: '#000000',
    borderRadius: 100,
    textAlign: 'center',
    fontSize: FontSize.XxLl,
  },
});
