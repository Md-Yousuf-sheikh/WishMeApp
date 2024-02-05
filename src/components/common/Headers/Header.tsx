import {useNavigation} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import MainHeader from './MainHeader';

interface PropsType {
  title?: string;
  type?: string;
  onPressLeft1?: () => void;
  onPressLeft2?: () => void;
}
export default function Header({
  title,
  type,
  onPressLeft1,
  onPressLeft2,
}: PropsType) {
  const navigation = useNavigation();
  //
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => (
        <MainHeader
          title={title}
          type={type}
          onPressLeft1={onPressLeft1}
          onPressLeft2={onPressLeft2}
        />
      ),
    });
  }, [navigation, onPressLeft1, onPressLeft2, title, type]);

  return <></>;
}
