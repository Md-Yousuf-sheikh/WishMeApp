import useNavigate from '@hooks/useNavigate';
import useShowToastMessage from '@hooks/useShowToastMessage';
import {useDeleteWishMutation, useUpdateWishMutation} from '@store/apis/wish';
import Colors from '@theme/colors';
import {useFormik} from 'formik';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Link,
  Pressable,
  Radio,
  Text,
  VStack,
} from 'native-base';
import React from 'react';
import {BDFlagIcon, ContactIcon} from 'src/NativeBaseIcon';
import CustomDatePickerInput from 'src/components/InputFiled/CustomDatePickerInput';
import CustomWiseSelectPicker from 'src/components/InputFiled/CustomWiseSelectPicker';
import Header from 'src/components/headers/Header';
import Background from 'src/components/shared/Background';
import asRoute from 'src/utils/withRoute';
import BadWords from 'bad-words';
import * as Yup from 'yup';
import {useRoute} from '@react-navigation/native';
import {IPropsWishItem} from 'src/typedef/navigation.types';
import ContactsListModal from 'src/components/actionSheet/ContactsListModal';

const filter = new BadWords();

const validationSchema = Yup.object().shape({
  receiverNumber: Yup.string()
    .matches(
      /^(\+88|88)?(01[3-9]\d{8})$/,
      'Please enter a valid Bangladeshi phone number',
    )
    .required('Phone number is required'),
  receiverName: Yup.string().required('Receiver name is required'),
  message: Yup.string()
    .required('Message is required')
    .test('no-profanity', 'Message contains profanity', value => {
      // Check if the message contains any profanity words
      return !filter.isProfane(value);
    })
    .min(10, 'Message must be at least 10 characters')
    .max(160, 'Message must be at most 160 characters'),
  wishTypeId: Yup.string().required('Wish type is required'),
  scheduleDate: Yup.string().required('Schedule date is required'),
  messageType: Yup.string().required('Sms type is required'),
});

//  crete wishes
const UpdateWishes = () => {
  // state
  const [isOpenContact, setIsOpenContact] = React.useState<boolean>(false);
  // hooks
  const navigate = useNavigate();
  const item = useRoute().params as IPropsWishItem;

  // const {handelSendMessage} = useSmsSender();
  const toast = useShowToastMessage();

  // APIS
  const [handelUpdate, {isLoading}] = useUpdateWishMutation();
  const [deleteWish, {}] = useDeleteWishMutation();
  const formik = useFormik({
    initialValues: {
      wishId: item?.wishId,
      receiverNumber: item?.receiver?.number,
      receiverName: item?.receiver?.fullName,
      message: item?.wish?.message,
      scheduleDate: `${item?.scheduleDate}`,
      wishTypeId: item?.wish?.typeId,
      messageType: item?.wish?.messageType,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async values => {
      try {
        const res = await handelUpdate(values).unwrap();
        toast(res?.message);
        navigate(undefined, undefined, 'goBack');
      } catch (err: any) {
        toast(err?.data?.message, 'error');
      }
      // if (values?.messageType === 'mobile') {
      //   const smsRes = handelSendMessage(
      //     values?.receiverNumber,
      //     values?.message,
      //   );
      //   console.log('smsRes', smsRes);
      //   toast('Send sms successfully');
      // }
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
  const handleDelete = async () => {
    const props = {
      wishId: item?.wishId,
    };
    try {
      const res = await deleteWish(props).unwrap();
      toast(res?.message);
      navigate(undefined, undefined, 'goBack');
    } catch (err: any) {
      toast(err?.data?.message, 'error');
    }
  };
  return (
    <Background type="scroll">
      <Header title="Update wishes" arrowLeft={false} />
      <VStack space={4} pt={2} px={4}>
        {/* Type */}
        <FormControl
          isInvalid={
            Boolean(errors.messageType) && Boolean(touched.messageType)
          }>
          <Radio.Group
            name="myRadioGroup"
            colorScheme="red"
            value={values?.messageType}
            onChange={v => {
              setFieldValue('messageType', v);
              console.log('v', v);
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
                  onPress={() => navigate('smsPlan')}
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
            {errors.messageType}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* name */}
        <FormControl
          isInvalid={
            Boolean(errors.receiverName) && Boolean(touched.receiverName)
          }>
          <Input
            placeholder="Receiver name"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'gray.700'}
            _focus={{bg: 'white', borderColor: Colors.primaryMain}}
            onChangeText={handleChange('receiverName')}
            fontWeight={'400'}
            onBlur={handleBlur('receiverName')}
            value={values.receiverName}
            _input={{
              background: Colors.lightGray1,
              borderColor: Colors.lightGray1,
            }}
          />
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.receiverName}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* mobile */}
        <FormControl
          isInvalid={
            Boolean(errors.receiverNumber) && Boolean(touched.receiverNumber)
          }>
          <Input
            placeholder="Mobile"
            rounded={8}
            placeholderTextColor={'gray.2'}
            color={'gray.700'}
            _focus={{bg: 'white', borderColor: Colors.primaryMain}}
            onChangeText={handleChange('receiverNumber')}
            fontWeight={'400'}
            onBlur={handleBlur('receiverNumber')}
            value={values.receiverNumber}
            keyboardType="number-pad"
            maxLength={11}
            _input={{
              background: Colors.lightGray1,
              borderColor: Colors.lightGray1,
            }}
            leftElement={
              <Box pl={3}>
                <BDFlagIcon size={6} />
              </Box>
            }
            rightElement={
              <Pressable
                onPress={() => {
                  setIsOpenContact(true);
                }}>
                <Box pr={3}>
                  <ContactIcon size={6} />
                </Box>
              </Pressable>
            }
          />
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.receiverNumber}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* wish type */}
        <FormControl
          isInvalid={Boolean(errors.wishTypeId) && Boolean(touched.wishTypeId)}
          isReadOnly>
          <CustomWiseSelectPicker
            setValue={(v: {wishTypeId: string; message: string}) => {
              setFieldValue('wishTypeId', v?.wishTypeId);
              setFieldValue('message', v?.message);
            }}
            value={{
              wishTypeId: values?.wishTypeId,
              message: values?.message,
            }}
          />
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.wishTypeId}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* message */}
        <FormControl
          isInvalid={Boolean(errors.message) && Boolean(touched.message)}>
          <Input
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
            multiline={true}
            _input={{
              background: Colors.lightGray1,
              borderColor: Colors.lightGray1,
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
        {/* Schedule Date  */}
        <FormControl
          isInvalid={
            Boolean(errors.scheduleDate) &&
            Boolean(touched.message) &&
            Boolean(touched.receiverNumber) &&
            Boolean(touched.receiverName) &&
            Boolean(touched.messageType) &&
            Boolean(touched.wishTypeId)
          }>
          <CustomDatePickerInput
            placeholder="Schedule date"
            setValue={props => {
              setFieldValue?.('scheduleDate', props);
            }}
            value={item?.scheduleDate}
            mode="datetime"
          />
          <FormControl.ErrorMessage
            _text={{fontSize: 'xs', fontWeight: 500, color: Colors.red}}>
            {errors.scheduleDate}
          </FormControl.ErrorMessage>
        </FormControl>
        {/* Button */}
        <HStack pt={5} justifyContent={'space-between'}>
          <Button
            px={4}
            py={3}
            isLoading={isLoading}
            borderRadius={'full'}
            onPress={() => handleSubmit()}
            _text={{fontSize: 'md', color: 'white'}}
            background={Colors.buttonColor}>
            Submit
          </Button>
          <Button
            px={4}
            py={3}
            variant={'unstyled'}
            // isLoading={isLoading}
            borderRadius={'full'}
            onPress={() => handleDelete()}
            _text={{fontSize: 'md', color: '#e62020'}}>
            Delete
          </Button>
        </HStack>
        {/* d */}
        <ContactsListModal
          isOpen={isOpenContact}
          onClose={() => setIsOpenContact(false)}
          setValue={number => setFieldValue('receiverNumber', number)}
        />
      </VStack>
    </Background>
  );
};

const updateWishes = asRoute(UpdateWishes, 'updateWishes', {
  animation: 'slide_from_right',
});

export default updateWishes;
