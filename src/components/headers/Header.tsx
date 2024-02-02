import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {LockIcon, Settings} from '@assets/icons';
import {HStack, Image, Text} from 'native-base';

export default function Header({
  title,
  type,
  onPress,
}: {
  title?: string;
  type?: string;
  onPress?: () => void;
}) {
  return (
    <HStack
      paddingX={4}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={60}>
      <Image
        source={require('@assets/images/logo.png')}
        alt="logo"
        height={8}
        width={8}
      />
      <Text fontSize={20} fontWeight={'700'}>
        {title}
      </Text>
      {}
      <TouchableOpacity onPress={onPress}>
        {onPress && <Settings />}
      </TouchableOpacity>
    </HStack>
  );
}

const styles = StyleSheet.create({});
