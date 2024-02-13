import useImageUploader from '@hooks/useImageUploader';
import useNavigate from '@hooks/useNavigate';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useUpdateProfileMutation} from '@store/apis/userProfile';
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
  Box,
} from 'native-base';
import React from 'react';
import {AvatarIcon, PlusIcon} from 'src/NativeBaseIcon';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
});

const UpdateRegInformation = () => {
  // hooks
  const navigate = useNavigate();
  const {handleImagePicker} = useImageUploader();
  const toast = useShowToastMessage();

  // APIS
  // const [handelSignUp] = useRegisterMutation();
  const [updateProfile, {isLoading, error}] = useUpdateProfileMutation();

  // form hooks
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      profileImage: {} as any,
    },
    validationSchema,
    onSubmit: async values => {
      const formData = new FormData();
      formData.append('firstName', values?.firstName);
      formData.append('lastName', values?.lastName);
      if (values?.profileImage?.fileName) {
        formData.append('avatar', {
          name: values?.profileImage?.fileName,
          type: 'image/*',
          uri: values?.profileImage?.uri,
        });
      }
      try {
        const formDataProps = {
          isImage: values?.profileImage ? true : false,
          body: formData,
        };
        const res = await updateProfile(formDataProps).unwrap();
        console.log('res', res);
        toast(res?.message);
      } catch (err: any) {
        toast(err?.data?.message || 'Something on the wrong ', 'error');
      }
    },
  });
  console.log('error', error);

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = formik;

  // handle Image Upload
  const handleImage = async () => {
    try {
      const file = await handleImagePicker();
      setFieldValue('profileImage', file);
    } catch (err) {}
  };

  //
  return (
    <Background type="scroll">
      <VStack
        px={4}
        flexGrow={1}
        justifyContent={'space-between'}
        // pt={10}
        pb={5}>
        {/* top */}
        <VStack>
          <Header title="Your Profile" rightContent={false} />
          {/* form input */}
          <VStack space={4} pt={4}>
            <FormControl
              isInvalid={
                Boolean(errors.profileImage) && Boolean(touched.profileImage)
              }>
              <Pressable
                w={100}
                h={100}
                mb={10}
                bg={'gray.100'}
                rounded={'full'}
                alignSelf={'center'}
                // overflow={'hidden'}
                onPress={handleImage}
                justifyContent={'center'}
                alignItems={'center'}>
                {values?.profileImage?.uri ? (
                  <Image
                    source={{
                      uri: values?.profileImage?.uri,
                    }}
                    w={100}
                    h={100}
                    rounded={'full'}
                    resizeMode="cover"
                    alt="profile"
                  />
                ) : (
                  <AvatarIcon size={12} />
                )}
                <Box position={'absolute'} bottom={0} right={3}>
                  <PlusIcon size={5} />
                </Box>
              </Pressable>
              <FormControl.ErrorMessage
                _text={{
                  fontSize: 'xs',
                  fontWeight: 500,
                  color: Colors.red,
                }}>
                {errors.profileImage}
              </FormControl.ErrorMessage>
            </FormControl>
            {/* First */}
            <FormControl
              isInvalid={
                Boolean(errors.firstName) && Boolean(touched.firstName)
              }>
              <Input
                placeholder="First name"
                rounded={8}
                placeholderTextColor={'gray.2'}
                color={'gray.700'}
                _focus={{bg: 'white', borderColor: Colors.lightGray1}}
                onChangeText={handleChange('firstName')}
                fontWeight={'400'}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                // fontSize={'lg'}
                maxLength={150}
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
            {/* last name */}
            <FormControl
              isInvalid={Boolean(errors.lastName) && Boolean(touched.lastName)}>
              <Input
                placeholder="Last name"
                rounded={8}
                placeholderTextColor={'gray.2'}
                color={'gray.700'}
                _focus={{bg: 'white', borderColor: Colors.lightGray1}}
                onChangeText={handleChange('lastName')}
                fontWeight={'400'}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                // fontSize={'lg'}
                maxLength={150}
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

            <VStack mt={4}>
              {/*  Buttons */}
              <Button
                px={4}
                py={3}
                isLoading={isLoading}
                borderRadius={'full'}
                onPress={() => handleSubmit()}
                _text={{fontSize: 'md', color: 'white'}}
                background={Colors.buttonColor}>
                Save
              </Button>
            </VStack>
          </VStack>
        </VStack>
        {/* footer */}
      </VStack>
    </Background>
  );
};

const updateRegInformation = asRoute(
  UpdateRegInformation,
  'updateRegInformation',
  {
    title: 'updateRegInformation',
    animation: 'slide_from_right',
    headerShown: false,
  },
);

export default updateRegInformation;
