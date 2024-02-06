import useImageUploader from '@hooks/useImageUploader';
import useNavigate from '@hooks/useNavigate';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useRegisterMutation} from '@store/apis/auth';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {
  Button,
  FormControl,
  HStack,
  Input,
  VStack,
  Text,
  Image,
  Pressable,
} from 'native-base';
import React from 'react';
import AuthTopSection from 'src/components/common/AuthTopSection';
import Background from 'src/components/shared/Background';
import createFormFile from 'src/utils/fileDetails';
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

const RegisterScreen = () => {
  // hooks
  // const navigate = useNavigate();
  const {handleImagePicker} = useImageUploader();
  const toast = useShowToastMessage();

  // APIS
  const [handelSignUp, {isLoading}] = useRegisterMutation();
  // form hooks
  const formik = useFormik({
    initialValues: {
      fullName: '',
      mobile: '',
      password: '',
      otp: '',
      otpVerifySuccess: false,
      profileImage: {} as any,
    },
    validationSchema,
    onSubmit: async values => {
      const formData = new FormData();

      formData.append('fullName', values?.fullName);
      formData.append('password', values?.password);
      formData.append('mobileNumber', values?.mobile);
      formData.append('avatar', {
        name: values?.profileImage?.fileName,
        type: 'image/*',
        uri: values?.profileImage?.uri,
      });
      console.log('formData', formData);

      try {
        const res = await handelSignUp(formData).unwrap();
        console.log('res ----->>>', res);
        toast(res?.data?.message);
      } catch (error: any) {
        console.log('error------>>>>>', error?.data?.errors);
        toast(
          error?.data?.errors?.message || 'Something on the wrong ',
          'error',
        );
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;

  //
  const handleSendOtp = async () => {
    //
  };
  // handleImage
  const handleImage = async () => {
    try {
      const file = await handleImagePicker();
      setFieldValue('profileImage', file);
    } catch (error) {}
  };
  return (
    <Background type="scroll">
      <VStack px={4} flexGrow={1} justifyContent={'space-between'} pb={5}>
        {/* top */}
        <VStack>
          <AuthTopSection title="Sign Up" />

          {/* form input */}
          <VStack space={4} pt={4}>
            <FormControl
              isInvalid={Boolean(errors.mobile) && Boolean(touched.mobile)}>
              <HStack justifyContent={'space-between'}>
                <Input
                  borderColor={Colors.primaryMain}
                  placeholder="Your phone number"
                  rounded={8}
                  placeholderTextColor={'gray.2'}
                  color={'gray.700'}
                  _focus={{bg: 'white', borderColor: Colors.primaryMain}}
                  onChangeText={handleChange('mobile')}
                  fontWeight={'400'}
                  onBlur={handleBlur('mobile')}
                  value={values.mobile}
                  fontSize={'lg'}
                  keyboardType="number-pad"
                  _input={{
                    background: '#ffffff',
                    borderColor: Colors.primaryMain,
                  }}
                  w={'70%'}
                />
                <Button
                  minW={'27%'}
                  px={4}
                  py={2}
                  borderRadius={'md'}
                  onPress={() => handleSendOtp()}
                  _text={{fontSize: 'md', color: 'white'}}
                  background={Colors.primaryMain}>
                  Send OTP
                </Button>
              </HStack>
              <FormControl.ErrorMessage
                color="white"
                _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                {errors.mobile}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={Boolean(errors.otp) && Boolean(touched.otp)}>
              <HStack justifyContent={'space-between'}>
                <Input
                  borderColor={Colors.primaryMain}
                  placeholder="OTP"
                  rounded={8}
                  placeholderTextColor={'gray.2'}
                  color={'gray.700'}
                  _focus={{bg: 'white', borderColor: Colors.primaryMain}}
                  onChangeText={handleChange('otp')}
                  fontWeight={'400'}
                  onBlur={handleBlur('otp')}
                  value={values.otp}
                  fontSize={'lg'}
                  keyboardType="number-pad"
                  _input={{
                    background: '#ffffff',
                    borderColor: Colors.primaryMain,
                  }}
                  w={'70%'}
                />
                <Button
                  minW={'27%'}
                  px={4}
                  py={2}
                  borderRadius={'md'}
                  onPress={() => handleSendOtp()}
                  _text={{fontSize: 'md', color: 'white'}}
                  background={Colors.primaryMain}>
                  Verify
                </Button>
              </HStack>
              <FormControl.ErrorMessage
                color="white"
                _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                {errors.otp}
              </FormControl.ErrorMessage>
            </FormControl>
            {!values?.otpVerifySuccess && (
              <>
                <Text color={'#004CA2'} fontSize={'md'}>
                  Your phone number has been verified; now you can set the
                  password below.
                </Text>
                <FormControl
                  isInvalid={
                    Boolean(errors.fullName) && Boolean(touched.fullName)
                  }>
                  <Input
                    borderColor={Colors.primaryMain}
                    placeholder="Type your name"
                    rounded={8}
                    placeholderTextColor={'gray.2'}
                    color={'gray.700'}
                    _focus={{bg: 'white', borderColor: Colors.primaryMain}}
                    onChangeText={handleChange('fullName')}
                    fontWeight={'400'}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                    fontSize={'lg'}
                    keyboardType="number-pad"
                    _input={{
                      background: '#ffffff',
                      borderColor: Colors.primaryMain,
                    }}
                  />

                  <FormControl.ErrorMessage
                    color="white"
                    _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                    {errors.fullName}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    Boolean(errors.password) && Boolean(touched.password)
                  }>
                  <Input
                    borderColor={Colors.primaryMain}
                    placeholder="Type password"
                    rounded={8}
                    placeholderTextColor={'gray.2'}
                    color={'gray.700'}
                    _focus={{bg: 'white', borderColor: Colors.primaryMain}}
                    onChangeText={handleChange('password')}
                    fontWeight={'400'}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    fontSize={'lg'}
                    keyboardType="number-pad"
                    _input={{
                      background: '#ffffff',
                      borderColor: Colors.primaryMain,
                    }}
                  />

                  <FormControl.ErrorMessage
                    color="white"
                    _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                    {errors.password}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl
                  isInvalid={
                    Boolean(errors.profileImage) &&
                    Boolean(touched.profileImage)
                  }>
                  <Pressable
                    w={130}
                    h={130}
                    bg={'gray.100'}
                    rounded={'full'}
                    overflow={'hidden'}
                    onPress={handleImage}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    {values?.profileImage?.uri ? (
                      <Image
                        source={{
                          uri: values?.profileImage?.uri,
                        }}
                        w={130}
                        h={130}
                        resizeMode="cover"
                        alt="profile"
                      />
                    ) : (
                      <Text color={'gray.500'}>ADD IMAGE</Text>
                    )}
                  </Pressable>
                  <FormControl.ErrorMessage
                    color="white"
                    _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
                    {errors.profileImage}
                  </FormControl.ErrorMessage>
                </FormControl>
                {/*  */}
                <HStack pt={5} justifyContent={'space-between'}>
                  <Button
                    px={4}
                    py={4}
                    isLoading={isLoading}
                    borderRadius={'full'}
                    onPress={() => handleSubmit()}
                    _text={{fontSize: 'md', color: 'white'}}
                    background={Colors.primaryMain}>
                    Start Wishing
                  </Button>
                </HStack>
              </>
            )}
          </VStack>
        </VStack>
        {/* footer */}
      </VStack>
    </Background>
  );
};

const registerScreen = asRoute(RegisterScreen, 'registerScreen', {
  title: 'RegisterScreen',
  animation: 'slide_from_right',
});

export default registerScreen;
