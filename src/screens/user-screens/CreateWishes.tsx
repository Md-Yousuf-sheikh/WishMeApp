import useNavigate from '@hooks/useNavigate';
import useShowToastMessage from '@hooks/useShowToastMessage';
import useSmsSender from '@hooks/useSmsSender';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {
  Box,
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  Link,
  Radio,
  Select,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {BDFlagIcon, ContactIcon} from 'src/NativeBaseIcon';
import CustomDatePickerInput from 'src/components/InputFiled/CustomDatePickerInput';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import {wishTypeList} from 'src/data';
import asRoute from 'src/utils/withRoute';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  mobile: Yup.string()
    .matches(
      /^(\+88|88)?(01[3-9]\d{8})$/,
      'Please enter a valid Bangladeshi phone number',
    )
    .required('Phone number is required'),
  receiver_name: Yup.string().required('Receiver name is required'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(160, 'Message must be at most 160 characters'),
  wishes_type: Yup.string().required('Wish type is required'),
  schedule_date: Yup.string().required('Schedule date is required'),
  sms_type: Yup.string().required('Sms type is required'),
});
const CreateWishes = () => {
  // hooks
  const navigate = useNavigate();
  const {handelSendMessage} = useSmsSender();
  const toast = useShowToastMessage();

  const formik = useFormik({
    initialValues: {
      mobile: '',
      receiver_name: '',
      message: '',
      schedule_date: '',
      wishes_type: '',
      sms_type: '',
    },
    validationSchema,
    onSubmit: async values => {
      console.log('values', values);
      // navigate('numberOtpVerify', values, undefined);
      if (values?.sms_type === 'mobile') {
        const smsRes = await handelSendMessage(values?.mobile, values?.message);
        console.log('smsRes', smsRes);
        toast('Send sms successfully');
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

  return (
    <Background type="scroll">
      <Header title="Create wishes" arrowLeft={false} />
      <VStack space={4} pt={2} px={4}>
        {/* Type */}
        <FormControl
          isInvalid={Boolean(errors.sms_type) && Boolean(touched.sms_type)}>
          <Radio.Group
            name="myRadioGroup"
            colorScheme="red"
            value={values?.sms_type}
            onChange={v => {
              setFieldValue('sms_type', v);
            }}>
            <HStack justifyContent={'space-between'} space={3}>
              <Radio
                value="mobile"
                my="1"
                size={5}
                color={Colors.primaryMain}
                _checked={{
                  backgroundColor: Colors.primaryMain,
                  borderColor: Colors.primaryMain,
                }}>
                From mobile
              </Radio>
              <Radio
                value="app"
                my="1"
                size={5}
                _checked={{
                  backgroundColor: Colors.primaryMain,
                  borderColor: Colors.primaryMain,
                }}>
                From App
                <Link
                  onPress={() => navigate('buyPlan')}
                  _text={{
                    color: Colors.primaryMain,
                  }}>
                  (Buy plan)
                </Link>
              </Radio>
            </HStack>
          </Radio.Group>
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.sms_type}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* name */}
        <FormControl
          isInvalid={
            Boolean(errors.receiver_name) && Boolean(touched.receiver_name)
          }>
          <Input
            borderColor={Colors.primaryMain}
            placeholder="Receiver name"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'gray.700'}
            _focus={{bg: 'white', borderColor: Colors.primaryMain}}
            onChangeText={handleChange('receiver_name')}
            fontWeight={'400'}
            onBlur={handleBlur('receiver_name')}
            value={values.receiver_name}
            _input={{
              background: 'gray.50',
              borderColor: Colors.primaryMain,
            }}
          />
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.receiver_name}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* mobile */}
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
            keyboardType="number-pad"
            maxLength={11}
            _input={{
              background: 'gray.50',
              borderColor: Colors.primaryMain,
            }}
            leftElement={
              <Box pl={3}>
                <BDFlagIcon size={6} />
              </Box>
            }
            rightElement={
              <Box pr={3}>
                <ContactIcon size={6} />
              </Box>
            }
          />
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.mobile}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* message */}
        <FormControl
          isInvalid={Boolean(errors.message) && Boolean(touched.message)}>
          <Input
            borderColor={Colors.primaryMain}
            placeholder="Message"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'gray.700'}
            _focus={{bg: 'white', borderColor: Colors.primaryMain}}
            onChangeText={handleChange('message')}
            fontWeight={'400'}
            onBlur={handleBlur('message')}
            value={values.message}
            numberOfLines={7}
            pt={3}
            textAlignVertical={'top'}
            _input={{
              background: 'gray.50',
              borderColor: Colors.primaryMain,
            }}
          />
          <HStack justifyContent={'flex-end'}>
            <Text color={'gray.400'}>
              Please limit your message to 10-160 characters.
            </Text>
          </HStack>
          <FormControl.ErrorMessage
            color="white"
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.message}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* wish type */}
        <FormControl
          isInvalid={
            Boolean(errors.wishes_type) && Boolean(touched.wishes_type)
          }
          isReadOnly>
          <Select
            borderColor={Colors.primaryMain}
            backgroundColor={'gray.100'}
            selectedValue={values.wishes_type}
            accessibilityLabel="Select wishes type"
            placeholder="Choose wish type"
            _selectedItem={{
              bg: 'white',
              endIcon: <CheckIcon size="5" />,
            }}
            onValueChange={itemValue =>
              setFieldValue?.('wishes_type', itemValue)
            }>
            {wishTypeList?.map(item => (
              <Select.Item label={item.label} value={item.label} />
            ))}
          </Select>
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.wishes_type}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* Schedule Date  */}
        <FormControl
          isInvalid={
            Boolean(errors.schedule_date) &&
            Boolean(touched.message) &&
            Boolean(touched.mobile) &&
            Boolean(touched.receiver_name) &&
            Boolean(touched.sms_type) &&
            Boolean(touched.wishes_type)
          }>
          <CustomDatePickerInput
            bgColor={'gray.100'}
            placeholder="Schedule date"
            setValue={props => {
              setFieldValue?.('schedule_date', props);
            }}
          />
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.schedule_date}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* Button */}
        <HStack pt={5} justifyContent={'space-between'}>
          <Button
            px={4}
            py={3}
            // isLoading={isLoading}
            borderRadius={'full'}
            onPress={() => handleSubmit()}
            _text={{fontSize: 'md', color: 'white'}}
            background={Colors.buttonColor}>
            Submit
          </Button>
          {/* <Button
            px={4}
            py={3}
            variant={'unstyled'}
            // isLoading={isLoading}
            borderRadius={'full'}
            // onPress={() => handleSubmit()}
            _text={{fontSize: 'md', color: '#e62020'}}>
            Delete
          </Button> */}
        </HStack>
      </VStack>
    </Background>
  );
};

const createWishes = asRoute(CreateWishes, 'createWishes', {
  animation: 'slide_from_right',
});

export default createWishes;
