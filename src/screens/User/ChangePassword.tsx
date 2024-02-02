import {StyleSheet} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {usePasswordChangeMutation} from '@store/apis/auth';
import useShowToastMessage from '@hooks/useShowToastMessage';
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
import {EyeCloseIcon, EyeOpenIcon, LockIcon} from '@assets/icons';
import useToggle from '@hooks/useToggle';
import useNavigate from '@hooks/useNavigate';
import {PutV1AuthPasswordChangeErrorResponse} from '@store/schema';
//  validation
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Confirm Password is required'),
});
// You2$Ppsw
export default function ChangePassword() {
  // state
  const [eyeOpen, toggleEyeOpen] = useToggle(false);
  const [eyeOpen1, toggleEyeOpen1] = useToggle(false);
  const [eyeOpen2, toggleEyeOpen2] = useToggle(false);
  // hooks
  const toast = useShowToastMessage();
  const navigate = useNavigate();

  //  APIS
  const [changePassword, {isLoading}] = usePasswordChangeMutation();

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async values => {
      await handelChangePassword(values);
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  const handelChangePassword = async () => {
    // return;
    const body = {
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

    try {
      const res = await changePassword(body).unwrap();
      console.log('res-', res);
      toast(res?.data.message);
      navigate(undefined, undefined, 'goBack');
    } catch (err) {
      console.log('error', error);

      const error = err as PutV1AuthPasswordChangeErrorResponse;
      toast(error?.error?.message, 'error');
    }
  };
  // con
  return (
    <VStack w="100%" px={4} mt={10}>
      <VStack space="4">
        {/* <FormControl>
          <Input
            bg="white"
            placeholder="Current Password"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'black'}
            type={eyeOpen ? 'text' : 'password'}
            _focus={{bg: 'white'}}
            onChangeText={handleChange('currentPassword')}
            onBlur={handleBlur('currentPassword')}
            value={values.currentPassword}
            leftElement={<LockIcon style={{marginLeft: 10}} />}
            rightElement={
              <Pressable onPress={toggleEyeOpen2} mr={'10px'}>
                {eyeOpen2 ? <EyeCloseIcon /> : <EyeOpenIcon />}
              </Pressable>
            }
          />
          <FormControl.ErrorMessage color="white">
            {touched.password && errors.password}
          </FormControl.ErrorMessage>
        </FormControl> */}
        <FormControl isInvalid={Boolean(errors.password)}>
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
        <FormControl isInvalid={Boolean(errors.confirmPassword)}>
          <Input
            bg="white"
            placeholder="Confirm Password"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'black'}
            type={eyeOpen1 ? 'text' : 'password'}
            _focus={{bg: 'white'}}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
            leftElement={<LockIcon style={{marginLeft: 10}} />}
            rightElement={
              <Pressable onPress={toggleEyeOpen1} mr={'10px'}>
                {eyeOpen1 ? <EyeCloseIcon /> : <EyeOpenIcon />}
              </Pressable>
            }
          />
          <FormControl.ErrorMessage color="#e41e1e">
            {errors.confirmPassword}
          </FormControl.ErrorMessage>
        </FormControl>
        <Center display="flex" flexDirection="row" justifyContent="center">
          <Text color="#68696B90" px={2}>
            Please enter one cheater & number.
          </Text>
        </Center>
        <Button
          w="full"
          bg={'secondary.100'}
          rounded={8}
          py={3}
          _text={{color: 'black', fontWeight: 700}}
          _pressed={{bg: '#68696B90'}}
          onPress={handleSubmit}
          isLoading={isLoading}>
          Submit
        </Button>
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({});
