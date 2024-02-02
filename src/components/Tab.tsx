import React from 'react';
import {Box, Button, HStack} from 'native-base';
import {IButtonComponentType} from 'native-base/lib/typescript/components/primitives/Button/types';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';
import { scale } from 'react-native-size-matters';
import { fontSizes } from '@theme/typography';

interface TabProps {
  title: string;
  key: string;
}

interface Props {
  _buttonStyle?: IButtonComponentType;
  _containerStyle?: IViewProps;
  innerContainerStyle?: IHStackProps;
  tabs: TabProps[];
  onPress: (key: string) => void;
  activeTab: string;
}

export default function Tab({
  _buttonStyle,
  activeTab,
  onPress,
  tabs,
  _containerStyle,
  _innerContainerStyle,
}: Props) {
  const [containerWidth, setContainerWidth] = React.useState(0);

  const buttonWidth = React.useMemo(() => {
    return containerWidth ? containerWidth / tabs.length : 0;
  }, [containerWidth, tabs.length]);

  return (
    <Box
      bg="white"
      rounded="xl"
      shadow={1}
      py={'8px'}
      px={'4px'}
      {..._containerStyle}>
      <HStack
        onLayout={event => {
          setContainerWidth(event.nativeEvent.layout.width);
        }}
        overflow="hidden"
        gap={1}
        {..._innerContainerStyle}>
        {tabs.map(tab => (
          <Button
            key={tab.key}
            onPress={() => onPress?.(tab.key)}
            width={buttonWidth + 'px'}
            bg={activeTab === tab.key ? 'secondary.100' : 'white'}
            rounded="lg"
            _text={{
              color: 'black',
              fontWeight: activeTab === tab.key ? 'bold' : 'normal',
              fontSize: fontSizes['2xs'],
            }}
            _pressed={{
              bg: 'secondary.100',
            }}
            {..._buttonStyle}>
            {tab.title}
          </Button>
        ))}
      </HStack>
    </Box>
  );
}
