import React from 'react';
import {Box, HStack, ITextProps, Pressable, Text} from 'native-base';
import {IButtonComponentType} from 'native-base/lib/typescript/components/primitives/Button/types';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';

interface TabProps {
  title: string;
  key?: string;
  render?: () => React.ReactNode;
}

interface Props {
  cellStyle?: IButtonComponentType;
  _containerStyle?: IViewProps;
  _textStyle?: ITextProps;
  cols: TabProps[];
  onPress?: (key: string) => void;
}

export default function TableRow({
  cellStyle,
  onPress,
  cols,
  _containerStyle,
  _textStyle,
}: Props) {
  const [containerWidth, setContainerWidth] = React.useState(0);

  const buttonWidth = React.useMemo(() => {
    return containerWidth ? containerWidth / cols.length : 0;
  }, [containerWidth, cols.length]);

  return (
    <HStack
      onLayout={event => {
        setContainerWidth(event.nativeEvent.layout.width);
      }}
      overflow="hidden"
      py={2}
      borderRadius={8}
      {..._containerStyle}>
      {cols.map(tab => (
        <>
          {tab?.render ? (
            <Box width={buttonWidth}>{tab.render()}</Box>
          ) : (
            <Pressable
              key={tab.key}
              onPress={() => onPress?.(tab.key)}
              width={buttonWidth + 'px'}
              bg={'transparent'}
              rounded="lg"
              {...cellStyle}>
              <Text textAlign="center" {..._textStyle}>
                {tab.title}
              </Text>
            </Pressable>
          )}
        </>
      ))}
    </HStack>
  );
}
