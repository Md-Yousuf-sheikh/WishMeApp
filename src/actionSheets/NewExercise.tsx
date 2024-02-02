import React from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  HStack,
  Input,
  Modal,
  Pressable,
  Stack,
  Text,
  VStack,
} from 'native-base';
import {fontSizes} from '@theme/typography';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CloseIcon, FileUploadIcon} from '@assets/icons';

const colors = [
  '#4FCF8C',
  '#FFC542',
  '#FF5959',
  '##2A9BCE',
  '#FFC542',
  '#FF5959',
  '##2A9BCE',
];

const checkBoxValues = [
  {
    label: 'Reps',
    value: 'reps',
  },
  {
    label: 'Time',
    value: 'time',
  },
  {
    label: 'Dist',
    value: 'dist',
  },
  {
    label: 'Body weight',
    value: 'bodyWeight',
  },
];

const randomColor = (i: number) => {
  if (i < colors.length) {
    return colors[i];
  }
  const index = i % colors.length;

  return colors[index];
};

const validationSchema = Yup.object().shape({
  exerciseName: Yup.string().required('Required'),
  tags: Yup.array().of(Yup.string().required('Required')),
  video: Yup.string().required('Required'),
  instructions: Yup.string().required('Required'),
  options: Yup.array().of(Yup.string().optional()),
});

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NewExercise({isOpen, onClose}: IProps) {
  const [tagsVlue, setTagsValue] = React.useState<string>('');
  const formik = useFormik({
    initialValues: {
      exerciseName: '',
      tags: [],
      video: '',
      instructions: '',
      options: [],
    },
    onSubmit: values => {
      console.log(values);
    },
    validationSchema,
  });

  console.log(formik.values.tags);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content w="100%" h="100%" flex={1}>
        <KeyboardAwareScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          enableOnAndroid={true}>
          <VStack bg={'white'} flex={1} py={4}>
            <Text
              fontSize={fontSizes.xl}
              fontWeight="bold"
              color="black"
              textAlign="center"
              py={4}>
              New Exercise
            </Text>

            <VStack px={4} py={2} bg="white" space={4}>
              {/* Exercise Name */}
              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.exerciseName && formik.touched.exerciseName,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Exercise Name
                  </FormControl.Label>
                  <Input
                    placeholder="Exercise Name"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('exerciseName')}
                    value={formik.values.exerciseName}
                    onBlur={formik.handleBlur('exerciseName')}
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.exerciseName}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>

              {/* Tags */}
              <FormControl
                isRequired
                isInvalid={Boolean(formik.errors.tags && formik.touched.tags)}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Add Tags
                  </FormControl.Label>
                  <Input
                    placeholder="Exercise Name"
                    fontSize={fontSizes.xs}
                    onChangeText={(text: string) => {
                      setTagsValue(text);
                    }}
                    value={tagsVlue}
                    onBlur={formik.handleBlur('tags')}
                    onSubmitEditing={e => {
                      if (formik.values.tags.includes(tagsVlue)) {
                        return;
                      }
                      formik.setFieldValue('tags', [
                        ...formik.values.tags,
                        tagsVlue,
                      ]);
                      setTagsValue('');
                    }}
                  />

                  <HStack flexWrap="wrap" style={{gap: 5}}>
                    {formik.values.tags.map((tag: string, index: number) => {
                      const color = randomColor(index);
                      return (
                        <HStack
                          key={index}
                          bg={color + '20'}
                          px={3}
                          py={1}
                          borderRadius={5}
                          alignItems="center"
                          justifyContent="center"
                          space={2}>
                          <Pressable
                            onPress={() => {
                              formik.setFieldValue(
                                'tags',
                                formik.values.tags.filter(
                                  (item: string) => item !== tag,
                                ),
                              );
                            }}>
                            <CloseIcon
                              style={{tintColor: color}}
                              height={10}
                              width={10}
                              resizeMode="contain"
                            />
                          </Pressable>
                          <Text fontSize={fontSizes.xs} color={color}>
                            {tag}
                          </Text>
                        </HStack>
                      );
                    })}
                  </HStack>

                  <FormControl.ErrorMessage>
                    {formik.errors.tags}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>

              <HStack
                style={{
                  gap: 10,
                }}>
                {checkBoxValues.map((item, index) => {
                  return (
                    <Checkbox
                      key={index}
                      size="sm"
                      rounded={6}
                      borderColor={'#7D7C81'}
                      _checked={{
                        bg: '##7D7C81',
                        borderColor: '#7D7C81',
                      }}>
                      <Text fontSize={fontSizes.xs} color={'#7D7C81'}>
                        {item.label}
                      </Text>
                    </Checkbox>
                  );
                })}
              </HStack>

              <FormControl mt={4}>
                <Stack space={2}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Add Video
                  </FormControl.Label>

                  <Pressable
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    py={4}
                    px={2}
                    minHeight={150}
                    borderRadius={5}
                    borderWidth={1}
                    borderColor={'#7D7C81'}
                    style={{
                      borderStyle: 'dashed',
                    }}>
                    <FileUploadIcon
                      height={50}
                      width={50}
                      resizeMode="contain"
                    />
                    <Text
                      fontSize={fontSizes.xs}
                      color={'#7D7C81'}
                      textAlign="center">
                      Add Video
                    </Text>
                  </Pressable>
                </Stack>
              </FormControl>

              <FormControl
                isRequired
                isInvalid={Boolean(
                  formik.errors.instructions && formik.touched.instructions,
                )}>
                <Stack space={1}>
                  <FormControl.Label
                    color={'#1A1929'}
                    _text={{
                      color: 'black',
                      fontSize: fontSizes.sm,
                      fontWeight: 600,
                    }}>
                    Instructions
                  </FormControl.Label>
                  <Input
                    placeholder="Exercise Name"
                    fontSize={fontSizes.xs}
                    onChangeText={formik.handleChange('exerciseName')}
                    value={formik.values.exerciseName}
                    onBlur={formik.handleBlur('exerciseName')}
                    numberOfLines={5}
                    multiline={true}
                    textAlignVertical="top"
                  />
                  <FormControl.ErrorMessage>
                    {formik.errors.exerciseName}
                  </FormControl.ErrorMessage>
                </Stack>
              </FormControl>

              <Button
                w="full"
                bg={'primary.100'}
                rounded={8}
                py={3}
                mt={4}
                _text={{color: 'white', fontWeight: 700}}
                _pressed={{bg: '#68696B90'}}>
                Get Started
              </Button>
            </VStack>
          </VStack>
        </KeyboardAwareScrollView>
      </Modal.Content>
    </Modal>
  );
}
