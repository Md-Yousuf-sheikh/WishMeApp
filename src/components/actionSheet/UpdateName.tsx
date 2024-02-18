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
import {useFormik} from 'formik';
import {
  useUpdateNameMutation,
  useUpdateNumberMutation,
} from '@store/apis/userProfile';
import {useSelector} from 'react-redux';
import {selectUser} from '@store/features/authSlice';

interface IProps {
  isOpen: boolean;
  type?: 'log' | 'normal';
  onClose: () => void;
}

export default function UpdateName({isOpen, onClose}: IProps) {
  //  state
  const toast = useShowToastMessage();
  const authUser = useSelector(selectUser);
  // APIS
  const [UpdateUserName, {isLoading, error}] = useUpdateNameMutation();

  // form hooks
  const formik = useFormik({
    initialValues: {
      firstName: authUser?.firstName,
      lastName: authUser?.lastName,
    },
    enableReinitialize: true,
    // validationSchema,
    onSubmit: async props => {
      Keyboard.dismiss();
      try {
        const res = await UpdateUserName(props).unwrap();
        toast(res?.message);
        onClose();
        formik.resetForm();
      } catch (err: any) {
        toast(err?.data?.message || 'Something on the wrong ', 'error');
      }
    },
  });
  // form
  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;
  //
  console.log('error', error);

  return (
    <Modal
      zIndex={99}
      isOpen={isOpen}
      onClose={onClose}
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
                <Pressable onPress={onClose} pr={1}>
                  <Text color={'gray.400'}>Close</Text>
                </Pressable>
              </HStack>
              {/* title */}
              <Text pb={5} color={'gray.800'} fontSize={'lg'}>
                Want to update your name?
              </Text>
              <VStack space={5}>
                {/* first name */}
                <FormControl
                  isInvalid={
                    Boolean(errors.firstName) && Boolean(touched.firstName)
                  }>
                  <Input
                    placeholder="Enter your first name"
                    rounded={8}
                    placeholderTextColor={'gray.2'}
                    color={'gray.700'}
                    _focus={{bg: 'white', borderColor: Colors.lightGray1}}
                    onChangeText={handleChange('firstName')}
                    fontWeight={'400'}
                    onBlur={handleBlur('firstName')}
                    value={values.firstName}
                    _input={{
                      background: Colors.lightGray1,
                      borderColor: Colors.lightGray1,
                    }}
                  />
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 500,
                      color: Colors.red,
                    }}>
                    {errors.firstName}
                  </FormControl.ErrorMessage>
                </FormControl>
                {/* last Name */}
                <FormControl
                  isInvalid={
                    Boolean(errors.lastName) && Boolean(touched.lastName)
                  }>
                  <Input
                    placeholder="Enter your last name"
                    rounded={8}
                    placeholderTextColor={'gray.2'}
                    color={'gray.700'}
                    _focus={{bg: 'white', borderColor: Colors.lightGray1}}
                    onChangeText={handleChange('lastName')}
                    fontWeight={'400'}
                    onBlur={handleBlur('lastName')}
                    value={values.lastName}
                    _input={{
                      background: Colors.lightGray1,
                      borderColor: Colors.lightGray1,
                    }}
                  />
                  <FormControl.ErrorMessage
                    _text={{
                      fontSize: 'xs',
                      fontWeight: 500,
                      color: Colors.red,
                    }}>
                    {errors.lastName}
                  </FormControl.ErrorMessage>
                </FormControl>
                {/* button */}
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
              </VStack>
            </>
          </VStack>
        </KeyboardAvoidingView>
      </>
    </Modal>
  );
}
