import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import MainHeader from '../common/Headers/MainHeader';
interface PropsType {
  title?: string;
  type?: string;
  arrowLeft?: boolean;
  rightContent?: boolean;
  onPressLeft1?: () => void;
  onPressLeft2?: () => void;
}

export default function Header({
  title,
  type,
  onPressLeft1,
  onPressLeft2,
  arrowLeft,
  rightContent,
}: PropsType) {
  const navigation = useNavigation();
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
          arrowLeft={arrowLeft}
          rightContent={rightContent}
        />
      ),
    });
  }, [
    arrowLeft,
    navigation,
    onPressLeft1,
    onPressLeft2,
    title,
    type,
    rightContent,
  ]);

  return <></>;
}
