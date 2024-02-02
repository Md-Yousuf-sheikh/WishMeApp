import React from 'react';
import {HStack, Pressable, ScrollView, Text, VStack} from 'native-base';
import {
  ArrowDownIcon,
  Bell,
  LockV2,
  ProfileRound,
  Settings,
  Sheild,
  Support,
} from '@assets/icons';
import {fontSizes} from '@theme/typography';
import useNavigate from '@hooks/useNavigate';
import {logout} from '@store/features/authSlice';
import {useDispatch} from 'react-redux';

const tabItems = [
  {
    label: 'Edit Profile',
    icon: ProfileRound,
    nav: 'EditProfile',
  },
  {
    label: 'Change Password',
    icon: LockV2,
    nav: 'ChangePassword',
  },
  {
    label: 'Notification Preference',
    icon: Bell,
    nav: 'NotificationPreference',
  },
  {
    label: 'Account Management',
    icon: Settings,
    nav: 'SettingsScreen',
  },
  {
    label: 'Privacy & Security',
    icon: Sheild,
    nav: 'PrivacySecurity',
  },
  {
    label: 'Help & Support',
    icon: Support,
    nav: 'HelpSupport',
  },
  {
    label: 'Logout',
    icon: Support,
    nav: 'logout',
  },
];

export default function SettingsScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // admin@ppfitness.com
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
          onPress={() =>
            item?.nav !== 'logout' ? navigate(item?.nav) : dispatch(logout())
          }
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
