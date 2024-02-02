import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Image,
  Input,
  VStack,
} from 'native-base';
import useNavigate from '@hooks/useNavigate';
import {PostV1ProfileUpdateErrorResponse} from '@store/schema';
import CountryPicker from 'src/components/picker/CountryPicker';
import {
  useGetSingleProfileQuery,
  useUpdateFileMutation,
  useUpdateProfileMutation,
} from '@store/apis/userProfile';
import {useSelector} from 'react-redux';
import {selectUser} from '@store/features/authSlice';
import {Edit} from '@assets/icons';
import useImageUploader from '@hooks/useImageUploader';
import createFormFile from 'src/utils/fileDetails';
// You2$Ppsw
export default function EditProfile() {
  //
  const authUser = useSelector(selectUser);
  // Hooks
  const {handleImagePicker} = useImageUploader();
  const toast = useShowToastMessage();
  const navigate = useNavigate();
  // APIS
  const [handelProfile, {isLoading}] = useUpdateProfileMutation();
  const [handelFileUpload, {}] = useUpdateFileMutation();
  const {data} = useGetSingleProfileQuery();

  //
  const handelImage = async () => {
    try {
      const file = await handleImagePicker();
      const formData = new FormData();
      if (file?.fileName && file?.uri) {
        formData.append(
          'files',
          createFormFile(file?.uri, 'image', file?.fileName),
        );
      }
      const fileRes = await handelFileUpload(formData).unwrap();
      const res = await handelProfile({
        avatar: fileRes?.data?.data?.[0]?.url,
      }).unwrap();
      toast(res.data?.message);
    } catch (error) {
      toast(error?.data?.error?.message, 'error');
    }
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      fullName: data?.data?.data?.fullName,
      email: authUser?.email,
      number: data?.data?.data?.phone,
      country: data?.data?.data?.country,
    },
    // validationSchema,
    onSubmit: async values => {
      await handelUpdateProfile(values);
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

  const handelUpdateProfile = async () => {
    // return;
    const body = {
      fullName: values?.fullName,
      email: values?.email,
      phone: values?.number,
      country: values?.country,
    };

    try {
      const res = await handelProfile(body).unwrap();
      console.log('res-', res);
      toast(res?.data.message);
      navigate(undefined, undefined, 'goBack');
    } catch (err) {
      const error = err as PostV1ProfileUpdateErrorResponse;
      console.log('error', error);

      toast(error?.error?.message, 'error');
    }
  };

  // con
  return (
    <VStack w="100%" px={4} mt={10}>
      <VStack space="4">
        <HStack alignSelf={'center'}>
          <Box position={'relative'}>
            <Image
              source={{
                uri:
                  data?.data?.data?.avatar ??
                  'https://www.postendekker.nl/wp-content/uploads/2021/10/dummy-profile.jpg',
              }}
              alt={data?.data?.data?.fullName ?? 'image base'}
              size="86px"
              rounded="full"
              resizeMode="cover"
            />

            <Pressable
              onPress={handelImage}
              position={'absolute'}
              bottom={0}
              right={0}>
              <Edit height={20} width={20} />
            </Pressable>
          </Box>
        </HStack>

        <FormControl isInvalid={Boolean(errors.fullName)}>
          <FormControl.Label>Full Name</FormControl.Label>
          <Input
            bg="white"
            placeholder="Full Name"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'black'}
            type={'text'}
            _focus={{bg: 'white'}}
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            value={values.fullName}
          />
          <FormControl.ErrorMessage color="white">
            {errors.fullName}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.email)}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            bg="white"
            placeholder="Email"
            rounded={8}
            isDisabled={true}
            placeholderTextColor={'gray.2'}
            color={'black'}
            type={'text'}
            _focus={{bg: 'white'}}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.email}
          />
          <FormControl.ErrorMessage color="white">
            {errors.email}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.number)}>
          <FormControl.Label>Phone Number</FormControl.Label>
          <Input
            bg="white"
            placeholder="Phone Number"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'black'}
            type={'text'}
            _focus={{bg: 'white'}}
            onChangeText={handleChange('number')}
            onBlur={handleBlur('number')}
            value={values.number}
          />
          <FormControl.ErrorMessage color="white">
            {errors.number}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(errors.country)}>
          <FormControl.Label>Country</FormControl.Label>
          <CountryPicker
            values={values.country}
            handleChange={value => {
              setFieldValue('country', value?.name);
            }}
          />
          <FormControl.ErrorMessage color="white">
            {errors.country}
          </FormControl.ErrorMessage>
        </FormControl>
        <Button
          w="full"
          bg={'secondary.100'}
          rounded={8}
          py={3}
          _text={{color: 'black', fontWeight: 700}}
          _pressed={{bg: '#68696B90'}}
          onPress={handleSubmit}
          isLoading={isLoading}>
          Save
        </Button>
      </VStack>
    </VStack>
  );
}

const styles = StyleSheet.create({});
function navigate(undefined: undefined, undefined1: undefined, arg2: string) {
  throw new Error('Function not implemented.');
}
