import {ImageBackground} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Center,
  Factory,
  FormControl,
  Image,
  Input,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import VectorImage from 'react-native-vector-image';
import useToggle from '@hooks/useToggle';
import {useNavigation} from '@react-navigation/native';
import {
  AppleIcon,
  EmailIcon,
  EyeCloseIcon,
  EyeOpenIcon,
  FacebookIcon,
  GoogleIcon,
  LockIcon,
} from '@assets/icons';
import {useLoginMutation} from '@store/apis/auth';
import useShowToastMessage from '@hooks/useShowToastMessage';

const FBgImage = Factory(ImageBackground);
//
//  validation
const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

export default function LoginScreen() {
  const [eyeOpen, toggleEyeOpen] = useToggle(false);
  const navigation = useNavigation();
  const toast = useShowToastMessage();

  const navigateToSignUp = () => {
    navigation.navigate('Register');
  };
  const [loginUser, {isLoading}] = useLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async v => {
      await handelRegister();
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  const handelRegister = async () => {
    // showModal('success', {
    //   title: 'Success',
    //   message: 'Information updated successfully.',
    // });

    try {
      const res = await loginUser({
        email: values.email,
        password: values.password,
        method: 'email',
      }).unwrap();
      console.log('res-', res);

      toast(res?.data.message);
    } catch (error) {
      toast(error?.data.message, 'error');
    }
  };
  //
  return (
    <FBgImage
      source={require('@assets/images/screen2.png')}
      flex={1}
      resizeMode="cover"
      alignItems="center">
      <Image
        source={require('@assets/images/logo.png')}
        alt="logo"
        mt={16}
        height={100}
        width={100}
      />

      <VStack w="100%" px={4} mt={10}>
        <Text fontSize="2xl" color="white" fontWeight={700}>
          Sign In
        </Text>
        <Text color="gray.4">Please sign in to access your account</Text>
        <VStack mt={10} space="4">
          <FormControl
            isInvalid={Boolean(errors.email) && Boolean(touched.email)}>
            <Input
              bg="white"
              placeholder="Email"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'black'}
              _focus={{bg: 'white'}}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <FormControl.ErrorMessage color="white">
              {errors.email}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl
            isInvalid={Boolean(errors.password) && Boolean(touched.password)}>
            <Input
              bg="white"
              placeholder="Password"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'black'}
              type={eyeOpen ? 'text' : 'password'}
              _focus={{bg: 'white'}}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              leftElement={<LockIcon style={{marginLeft: 10}} />}
              rightElement={
                <Pressable onPress={toggleEyeOpen} mr={'10px'}>
                  {eyeOpen ? <EyeCloseIcon /> : <EyeOpenIcon />}
                </Pressable>
              }
            />
            <FormControl.ErrorMessage color="white">
              {errors.password}
            </FormControl.ErrorMessage>
          </FormControl>
          <VStack space={2} alignItems="flex-end">
            <Text
              onPress={() => navigation.navigate('ForgetPassword')}
              color="white"
              fontSize="sm">
              Forgot password?
            </Text>
          </VStack>

          <Button
            w="full"
            bg={'secondary.100'}
            rounded={8}
            py={3}
            mt={10}
            _text={{color: 'black', fontWeight: 700}}
            _pressed={{bg: '#68696B90'}}
            isLoading={isLoading}
            onPress={handleSubmit}>
            Sign In
          </Button>

          <Center
            mt={5}
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Box bg="white" height={'0.5px'} width="50" />
            <Text color="white" px={2}>
              or continue with
            </Text>
            <Box bg="white" height={'0.5px'} width="50" />
          </Center>

          <VStack
            width="100%"
            alignItems="center"
            justifyContent={'center'}
            flexDirection="row"
            mt={5}
            style={{
              gap: 10,
            }}>
            <GoogleIcon />
            <FacebookIcon />
            <AppleIcon />
          </VStack>

          <Center
            mt={5}
            display="flex"
            flexDirection="row"
            justifyContent="center">
            <Text color="white" px={2}>
              Don’t have and account?{'  '}
              <Text
                color="secondary.100"
                px={2}
                fontWeight={600}
                onPress={navigateToSignUp}>
                Sign Up
              </Text>
            </Text>
          </Center>
        </VStack>
      </VStack>
    </FBgImage>
  );
}
