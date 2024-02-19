import useNavigate from '@hooks/useNavigate';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useCreateReferralMutation} from '@store/apis/userProfile';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {Button, FormControl, Image, Input, Text, VStack} from 'native-base';
import React from 'react';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';
import * as Yup from 'yup';
import {wp} from '@theme/ScreenDimensions';
import ShearReferral from 'src/components/actionSheet/ShearReferral';

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  firstName: Yup.string().required('First name is required'),
});
const MyReferralScreen = () => {
  // State
  const [isOpen, setIsOpen] = React.useState(false);
  const [resData, setResData] = React.useState();
  // APIS
  const [createRef, {isLoading}] = useCreateReferralMutation();
  // hooks
  const navigate = useNavigate();
  const toast = useShowToastMessage();
  // form hooks
  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        const res = await createRef({
          firstName: values?.firstName,
          email: values?.email,
        }).unwrap();
        console.log('res', res);
        setResData(res?.data);
        setIsOpen(true);
        toast(res?.message);
        formik.resetForm();
      } catch (err: any) {
        toast(err?.data?.message || 'Something on the wrong ', 'error');
      }
    },
  });

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} =
    formik;

  return (
    <Background type="scroll">
      <Header title="My Referral" />
      {/* Modal */}
      <ShearReferral
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={resData}
      />
      {/* Content */}
      <VStack px={3} pt={4} space={1}>
        <Image
          source={require('@assets/images/refer-icon.png')}
          w={'full'}
          alt="refer"
          h={wp(60)}
        />
        <Text
          w={'90%'}
          alignSelf={'center'}
          fontSize={'lg'}
          color={'gray.800'}
          textAlign={'center'}>
          Refer a friend and get 10 WishMe SMS for free!
        </Text>
        <Text
          w={'90%'}
          alignSelf={'center'}
          fontSize={'md'}
          color={'gray.700'}
          textAlign={'center'}>
          Refer your friend to WishMe! Once your friend logs into the WishMe
          app, both of you will receive a 10 WishMe SMS.
        </Text>
        {/* Form */}

        <VStack space={5} bg={Colors.lightBlue} mt={3} rounded={'md'} p={4}>
          <Text
            onPress={() => navigate('')}
            w={'90%'}
            alignSelf={'center'}
            fontSize={'lg'}
            color={'gray.800'}
            textAlign={'center'}>
            Get Your Invite Link
          </Text>
          {/* form */}
          {/* First */}
          <FormControl
            isInvalid={Boolean(errors.firstName) && Boolean(touched.firstName)}>
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
          {/* Email */}
          <FormControl
            isInvalid={Boolean(errors.email) && Boolean(touched.email)}>
            <Input
              placeholder="Email"
              rounded={8}
              placeholderTextColor={'gray.2'}
              color={'gray.700'}
              _focus={{bg: 'white', borderColor: Colors.lightGray1}}
              onChangeText={handleChange('email')}
              fontWeight={'400'}
              onBlur={handleBlur('email')}
              value={values.email}
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
              {errors.email}
            </FormControl.ErrorMessage>
          </FormControl>
          {/* Button */}
          <Button
            px={4}
            py={3}
            isLoading={isLoading}
            borderRadius={'full'}
            onPress={() => handleSubmit()}
            _text={{fontSize: 'md', color: 'white'}}
            background={Colors.buttonColor}>
            Get Referral Link
          </Button>
        </VStack>
        {/*  */}
        <Text
          onPress={() => navigate('referralSummary')}
          w={'90%'}
          alignSelf={'center'}
          fontSize={'md'}
          textDecorationLine={'underline'}
          color={'gray.700'}
          textAlign={'center'}>
          My Referral Summary
        </Text>
      </VStack>
    </Background>
  );
};

const myReferralScreen = asRoute(MyReferralScreen, 'myReferral', {
  title: 'My ',
  animation: 'slide_from_right',
});

export default myReferralScreen;
