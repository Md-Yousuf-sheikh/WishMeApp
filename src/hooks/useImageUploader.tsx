import React from 'react';
import {ActionSheetIOS} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  MediaType,
} from 'react-native-image-picker';

type TOnImageUpload = (fileName?: string, uri?: string) => void;

export default function useImageUploader() {
  const [fileData, setFileData] = React.useState<
    | {
        fileName?: string;
        uri?: string;
      }
    | undefined
  >();

  const options = {
    mediaType: 'photo' as MediaType,
    cameraType: 'back',
  };

  const handleImagePicker = async () => {
    const result = await launchImageLibrary(options);
    if (result.assets) {
      const {fileName, uri} = result.assets[0];
      setFileData({fileName, uri});
      return {fileName, uri};
    }
  };

  const handleCameraPicker = async () => {
    const result = await launchCamera(options);
    if (result.assets) {
      const {fileName, uri} = result.assets[0];
      setFileData({fileName, uri});
      return {fileName, uri};
    }
  };

  const imagePickerIos = async (onImageUpload: TOnImageUpload) => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ['Cancel', 'Take Photo', 'Choose from Library'],
        cancelButtonIndex: 0,
      },
      async buttonIndex => {
        if (buttonIndex === 1) {
          const res = await handleCameraPicker();
          onImageUpload?.(res?.fileName, res?.uri);
        } else if (buttonIndex === 2) {
          const res = await handleImagePicker();
          onImageUpload?.(res?.fileName, res?.uri);
        }
      },
    );
  };

  return {handleImagePicker, handleCameraPicker, fileData, imagePickerIos};
}
