import React from 'react';
import {HStack, Pressable, ScrollView, Text, VStack} from 'native-base';
import {
  ArrowDownIcon,
  EmailHelpIcon,
  PhoneHelpIcon,
  TwitterHelpIcon,
  WhatsAppHelpIcon,
} from '@assets/icons';
import {fontSizes} from '@theme/typography';
import useNavigate from '@hooks/useNavigate';
import {VectorImageProps} from 'react-native-vector-image';
import {Linking} from 'react-native';

const tabItems = [
  {
    label: '+1-200-666-0399',
    icon: PhoneHelpIcon,
    value: '+1-200-666-0399',
    key: 'phone',
  },
  {
    label: 'ppfit@support.com',
    icon: EmailHelpIcon,
    value: 'ppfit@support.com',
    key: 'email',
  },
  {
    label: 'WhatsApp',
    icon: WhatsAppHelpIcon,
    value: '+1-200-666-0399',
    key: 'whatsApp',
  },
  {
    label: 'Twitter',
    icon: TwitterHelpIcon,
    value: 'https://twitter.com/',
    key: 'twitter',
  },
];

export default function HelpSupport() {
  const navigate = useNavigate();

  const handlePress = async (item: {
    label?: string;
    key?: string;
    icon?: ({
      ...rest
    }: Partial<VectorImageProps> | undefined) => React.JSX.Element;
    value: any;
    nav?: any;
  }) => {
    if (item.key === 'phone') {
      Linking.openURL(`tel:${item?.value}`);
    } else if (item.key === 'email') {
      Linking.openURL(`mailto:${item?.value}`);
    } else if (item.key === 'whatsApp') {
      const support = await Linking.canOpenURL(
        `whatsapp://send?phone=${item?.value}`,
      );
      if (support) {
        Linking.openURL(`whatsapp://send?phone=${item?.value}`);
      } else {
        Linking.openURL(`https://web.whatsapp.com/`);
      }
    } else if (item.key === 'twitter') {
      const support = await Linking.canOpenURL(`twitter:${item?.value}`);
      if (support) {
        Linking.openURL(`twitter:${item?.value}`);
      } else {
        Linking.openURL(`https://twitter.com/`);
      }
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{
        bg: 'bg',
        px: 4,
        py: 4,
        flexGrow: 1,
        gap: 4,
        bgColor: '#F8F8F8',
      }}>
      {tabItems.map((item, index) => (
        <Pressable
          key={index}
          w="100%"
          bg="white"
          px={4}
          py={4}
          rounded="xl"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          onPress={() => handlePress(item)}
          _pressed={{bg: 'gray.100'}}>
          <HStack space={4}>
            <item.icon />
            <VStack alignItems="flex-start" justifyContent="center" gap={2}>
              <Text fontSize={fontSizes.sm} color="#1A1929">
                {item.label}
              </Text>
            </VStack>
          </HStack>
          <ArrowDownIcon style={{transform: [{rotate: '-90deg'}]}} />
        </Pressable>
      ))}
    </ScrollView>
  );
}
