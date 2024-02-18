/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Button,
  FormControl,
  HStack,
  Input,
  Modal,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {hp, wp} from '@theme/ScreenDimensions';
import Colors from '@theme/colors';
import {Keyboard, KeyboardAvoidingView} from 'react-native';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useSendOtpNumberMutation} from '@store/apis/auth';
import {useFormik} from 'formik';
import {useUpdateNumberMutation} from '@store/apis/userProfile';
import * as Yup from 'yup';
const validationSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(
      /^(\+88|88)?(01[3-9]\d{8})$/,
      'Please enter a valid Bangladeshi phone number',
    )
    .required('Phone number is required'),
  otp: Yup.string().required('Otp is required'),
});

interface IProps {
  isOpen: boolean;
  type?: 'log' | 'normal';
  onClose: () => void;
}

export default function UpdateNumber({isOpen, onClose}: IProps) {
  //  state
  const toast = useShowToastMessage();
  // APIS
  const [SendOtp, {isLoading: isSendOtpLoad}] = useSendOtpNumberMutation();
  const [UpdatePhoneNumber, {isLoading}] = useUpdateNumberMutation();

  // form hooks
  const formik = useFormik({
    initialValues: {
      mobile: '',
      otp: '',
      isSendOtp: false,
      isMobileVerify: false,
    },
    validationSchema,
    onSubmit: async () => {
      handelUpdateNumber();
    },
  });
  // form
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;

  // handel verify
  const handelSendOtp = async () => {
    Keyboard.dismiss();
    try {
      const res = await SendOtp({
        mobileNumber: values?.mobile,
      }).unwrap();
      console.log('res', res);
      setFieldValue('isSendOtp', true);

      toast(res?.message);
    } catch (err: any) {
      toast(err?.data?.message || 'Something on the wrong ', 'error');
    }
  };
  // handel verify
  const handelUpdateNumber = async () => {
    Keyboard.dismiss();
    try {
      const res = await UpdatePhoneNumber({
        mobileNumber: values?.mobile,
        otp: values?.otp,
      }).unwrap();
      formik.resetForm();
      toast(res?.message);
      handelOnClose();
    } catch (err: any) {
      toast(err?.data?.message || 'Something on the wrong ', 'error');
    }
  };

  const handelOnClose = () => {
    onClose();
  };

  return (
    <Modal
      zIndex={99}
      isOpen={isOpen}
      onClose={handelOnClose}
      justifyContent={'flex-end'}>
      <>
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
                <Pressable onPress={handelOnClose} pr={1}>
                  <Text color={'gray.400'}>Close</Text>
                </Pressable>
              </HStack>
              {/* title */}
              <Text pb={5} color={'gray.800'} fontSize={'lg'}>
                Want to update your phone number?
              </Text>
              <VStack space={5}>
                {/* number */}
                <FormControl
                  isInvalid={Boolean(errors.mobile) && Boolean(touched.mobile)}>
                  <HStack justifyContent={'space-between'}>
                    <Input
                      placeholder="Your phone number"
                      rounded={8}
                      placeholderTextColor={'gray.2'}
                      color={'gray.700'}
                      _focus={{bg: 'white', borderColor: Colors.lightGray1}}
                      onChangeText={handleChange('mobile')}
                      fontWeight={'400'}
                      onBlur={handleBlur('mobile')}
                      value={values.mobile}
                      keyboardType="number-pad"
                      maxLength={11}
                      w={'60%'}
                      _input={{
                        background: Colors.lightGray1,
                        borderColor: Colors.lightGray1,
                      }}
                    />
                    <Button
                      onPress={() => handelSendOtp()}
                      isLoading={isSendOtpLoad}
                      w={'30%'}
                      background={Colors.buttonColor}>
                      Send OTP
                    </Button>
                  </HStack>
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 500,
                      color: Colors.red,
                    }}>
                    {errors.mobile}
                  </FormControl.ErrorMessage>
                  {values?.isSendOtp && (
                    <FormControl.HelperText>
                      OTP has been sent to your registered number. Please check
                      your SMS and enter the code below to complete the
                      verification process:
                    </FormControl.HelperText>
                  )}
                </FormControl>
                {/* otp */}
                {values?.isSendOtp && (
                  <FormControl
                    isInvalid={Boolean(errors.otp) && Boolean(touched.otp)}>
                    <Input
                      placeholder="OTP"
                      rounded={8}
                      placeholderTextColor={'gray.2'}
                      color={'gray.700'}
                      _focus={{bg: 'white', borderColor: Colors.lightGray1}}
                      onChangeText={handleChange('otp')}
                      fontWeight={'400'}
                      onBlur={handleBlur('otp')}
                      value={values.otp}
                      keyboardType="number-pad"
                      maxLength={5}
                      // w={'60%'}
                      _input={{
                        background: Colors.lightGray1,
                        borderColor: Colors.lightGray1,
                      }}
                    />
                    {/* <HStack justifyContent={'space-between'}>
                  
                      <Button
                        onPress={() => handelVerify()}
                        isLoading={isVerifyLoad}
                        w={'30%'}
                        background={Colors.buttonColor}>
                        Verify
                      </Button>
                    </HStack> */}
                    <FormControl.ErrorMessage
                      _text={{
                        fontSize: 'xs',
                        fontWeight: 500,
                        color: Colors.red,
                      }}>
                      {errors.mobile}
                    </FormControl.ErrorMessage>
                  </FormControl>
                )}
                {/* button */}
                {values?.isSendOtp && (
                  <Button
                    py={3}
                    mt={10}
                    bg={Colors.primaryMain}
                    onPress={() => handleSubmit()}
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
                    Update
                  </Button>
                )}
              </VStack>
            </>
          </VStack>
        </KeyboardAvoidingView>
      </>
    </Modal>
  );
}
