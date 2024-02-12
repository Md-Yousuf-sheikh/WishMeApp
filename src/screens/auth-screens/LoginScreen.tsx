import useNavigate from '@hooks/useNavigate';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useLoginWithPasswordMutation} from '@store/apis/auth';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {Button, FormControl, HStack, Input, Text, VStack} from 'native-base';
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
  password: Yup.string().required('Password is required'),
});

const LoginScreen = () => {
  // hooks
  const navigate = useNavigate();
  const toast = useShowToastMessage();

  // APIS
  const [handelSignIn, {isLoading}] = useLoginWithPasswordMutation();

  // form hooks
  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const res = await handelSignIn({
          password: values?.password,
          mobileNumber: values?.mobile,
        }).unwrap();
        // console.log('res', res);
        formik.resetForm();
        toast(res?.message);
      } catch (error: any) {
        toast(error?.data?.message || 'Something on the wrong ', 'error');
      }
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  return (
    <Background type="scroll">
      <VStack px={4} flexGrow={1} justifyContent={'space-between'} pb={5}>
        {/* top */}
        <VStack>
          <AuthTopSection
            titleMt={5}
            arrowIcon={true}
            title="Sign In"
            subTitle="Please confirm your country code and enter your phone number"
          />

          {/* form input */}
          <VStack space={4} pt={4}>
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
                keyboardType="number-pad"
                _input={{
                  background: Colors.lightGray1,
                  borderColor: Colors.lightGray1,
                }}
              />
              <FormControl.ErrorMessage
                _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
                {errors.mobile}
              </FormControl.ErrorMessage>
            </FormControl>
            <FormControl
              isInvalid={Boolean(errors.password) && Boolean(touched.password)}>
              <Input
                placeholder="Password"
                rounded={8}
                placeholderTextColor={'gray.2'}
                color={'gray.700'}
                _focus={{bg: 'white', borderColor: Colors.lightGray1}}
                onChangeText={handleChange('password')}
                fontWeight={'400'}
                onBlur={handleBlur('password')}
                value={values.password}
                _input={{
                  background: Colors.lightGray1,
                  borderColor: Colors.lightGray1,
                }}
              />

              <FormControl.ErrorMessage
                _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
                {errors.password}
              </FormControl.ErrorMessage>
            </FormControl>
            {/* submit button */}
            <Button
              px={4}
              py={3}
              mt={10}
              isLoading={isLoading}
              borderRadius={'full'}
              onPress={() => handleSubmit()}
              _text={{fontSize: 'md', color: 'white'}}
              background={Colors.buttonColor}>
              Submit
            </Button>
            <Button
              px={4}
              py={4}
              variant={'unstyled'}
              borderRadius={'full'}
              onPress={() => navigate('registerScreen')}
              _text={{fontSize: 'md', color: 'gray.800'}}>
              <HStack>
                <Text fontSize={'md'} mr={1} color={'gray.800'}>
                  Have you not
                </Text>
                <Text fontSize={'md'} color={Colors.buttonColor}>
                  Registered
                </Text>
                <Text fontSize={'md'} ml={1} color={'gray.800'}>
                  yet?
                </Text>
              </HStack>
            </Button>
          </VStack>
        </VStack>
        {/* footer */}
      </VStack>
    </Background>
  );
};

const loginScreen = asRoute(LoginScreen, 'loginScreen', {
  title: 'LoginScreen',
  animation: 'slide_from_right',
});

export default loginScreen;
