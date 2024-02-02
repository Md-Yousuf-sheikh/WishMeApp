import {useToast} from 'native-base';

const useShowToastMessage = () => {
  const toast = useToast();
  const showToastMessage = (
    message: string | undefined = '',
    status: string | undefined = 'success',
    placement:
      | 'top'
      | 'bottom'
      | 'top-right'
      | 'top-left'
      | 'bottom-left'
      | 'bottom-right'
      | undefined = 'top',
  ) => {
    toast.show({
      title: message,
      placement: placement,
      backgroundColor: status == 'success' ? 'green.600' : 'red.600',
    });
  };

  return showToastMessage;
};

export default useShowToastMessage;
