import {SendDirectSms} from 'react-native-send-direct-sms';

// type PropsSendMessage = {
//   number: string;
//   bodySMS: string;
// };

export default function useSmsSender() {
  // send sms
  const handelSendMessage = (number: string, bodySMS: string) => {
    SendDirectSms(number, bodySMS)
      .then((res: any) => {
        console.log('then', res);
        return res;
      })
      .catch((err: any) => {
        console.log('catch', err);
        return err;
      });
  };

  return {
    handelSendMessage,
  };
}
