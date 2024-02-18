import React, {useState} from 'react';
import {ScrollView, VStack, useColorMode} from 'native-base';
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
          <ScrollView
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
          </ScrollView>
        ) : (
          children
        )}
      </VStack>
    </>
  );
};

export default Background;
