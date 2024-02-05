import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {FormControl, Input, VStack} from 'native-base';
import React from 'react';
import CustomDatePickerInput from 'src/components/InputFiled/CustomDatePickerInput';
import MainHeader from 'src/components/common/Headers/MainHeader';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';

const CreateWishes = () => {
  const formik = useFormik({
    initialValues: {
      mobile: '',
      password: '',
    },
    // validationSchema,
    onSubmit: async values => {
      console.log('values', values);
      // navigate('numberOtpVerify', values, undefined);
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

  return (
    <Background type="scroll">
      <MainHeader title="Create wishes" />
      <VStack space={4} px={4}>
        <FormControl
          isInvalid={Boolean(errors.mobile) && Boolean(touched.mobile)}>
          <Input
            borderColor={Colors.primaryMain}
            placeholder="Mobile"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'gray.700'}
            _focus={{bg: 'white', borderColor: Colors.primaryMain}}
            onChangeText={handleChange('mobile')}
            fontWeight={'400'}
            onBlur={handleBlur('mobile')}
            value={values.mobile}
            mt={5}
            keyboardType="number-pad"
            _input={{
              background: '#ffffff',
              borderColor: Colors.primaryMain,
            }}
          />
          <FormControl.ErrorMessage
            color="white"
            _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
            {errors.mobile}
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={Boolean(errors.mobile) && Boolean(touched.mobile)}>
          <CustomDatePickerInput
            placeholder="Schedule date"
            setValue={props => {
              setFieldValue?.('date', props);
            }}
          />
          <FormControl.ErrorMessage
            color="white"
            _text={{fontSize: 'xs', fontWeight: 500, color: 'white'}}>
            {errors.mobile}
          </FormControl.ErrorMessage>
        </FormControl>
      </VStack>
    </Background>
  );
};

const createWishes = asRoute(CreateWishes, 'createWishes', {
  animation: 'slide_from_right',
});

export default createWishes;
