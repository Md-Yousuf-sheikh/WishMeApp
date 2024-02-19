import React, {useState} from 'react';
import {VStack, useColorMode} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  StatusBar,
  StatusBarProps,
  ScrollViewProps,
  RefreshControl,
  ViewProps,
} from 'react-native';

interface PropsType {
  children?: React.ReactNode;
  type: 'scroll' | 'pull' | 'normal';
  vStackProps?: ViewProps;
  scrollViewProps?: ScrollViewProps;
  statusBarProps?: StatusBarProps;
  onRefresh?: () => void;
}

const Background = ({
  children,
  type,
  vStackProps,
  scrollViewProps,
  statusBarProps,
  onRefresh,
}: PropsType) => {
  const {colorMode} = useColorMode();
  const [isRefreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (onRefresh) {
      setRefreshing(true);
      onRefresh();
      setRefreshing(false);
    }
  };

  return (
    <>
      <StatusBar
        barStyle={colorMode === 'light' ? 'dark-content' : 'light-content'}
        {...statusBarProps}
      />
      <VStack bg="#ffffff" flexGrow={1} {...vStackProps}>
        {type === 'scroll' ? (
          <KeyboardAwareScrollView
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
              />
            }
            {...scrollViewProps}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            <>{children}</>
          </KeyboardAwareScrollView>
        ) : (
          children
        )}
      </VStack>
    </>
  );
};

export default Background;
