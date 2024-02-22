import React, {useState, useEffect} from 'react';
import {VStack, Modal, Button, Text, Image, HStack} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  StatusBar,
  StatusBarProps,
  ScrollViewProps,
  RefreshControl,
  ViewProps,
  Linking,
  Platform,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {hp} from '@theme/ScreenDimensions';
import Colors from '@theme/colors';

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
  const [isRefreshing, setRefreshing] = useState(false);
  const [isConnected, setConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state): any => {
      return setConnected(state.isConnected ? true : false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleRefresh = async () => {
    if (onRefresh) {
      setRefreshing(true);
      onRefresh();
      setRefreshing(false);
    }
  };

  const handleGoToSettings = () => {
    if (Platform.OS === 'android') {
      // Open Wi-Fi settings on Android
      Linking.sendIntent('android.settings.WIFI_SETTINGS');
    } else {
      Linking.openSettings();
    }
  };

  return (
    <>
      <StatusBar {...statusBarProps} />
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
            {children}
          </KeyboardAwareScrollView>
        ) : (
          children
        )}

        {/* No Internet Connection Modal */}
        {!isConnected && (
          <Modal isOpen={true} onClose={() => setConnected(true)}>
            <VStack
              minH={hp(50)}
              w={'95%'}
              space={3}
              rounded={'lg'}
              justifyContent={'center'}
              alignItems={'center'}
              bg={'white'}>
              <Image
                alt="sss"
                source={require('@assets/images/no-internet.png')}
                w={'48'}
                h={'48'}
              />

              {/* content */}
              <Text fontSize={'2xl'} color={Colors.primaryMain}>
                You appear to be offline
              </Text>
              <Text w={'70%'} color={Colors.primaryMain} textAlign={'center'}>
                You can't use WishMe until you're connected to the Internet
              </Text>
              <HStack mt={2} justifyContent={'space-between'} space={3}>
                <Button bg={Colors.primaryMain} onPress={handleRefresh}>
                  Try Again
                </Button>
                <Button
                  _text={{
                    color: 'black',
                  }}
                  variant={'outline'}
                  onPress={handleGoToSettings}>
                  Open Settings
                </Button>
              </HStack>
            </VStack>
          </Modal>
        )}
      </VStack>
    </>
  );
};

export default Background;
