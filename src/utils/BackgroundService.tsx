// import React, {useEffect} from 'react';
// import BackgroundService from 'react-native-background-actions';

// // Function to simulate SMS sending
// const sendSMS = (data: any) => {
//   // Implement your SMS sending logic here using the data parameter
//   console.log(`Sending SMS for wishId: ${data.wishId}`);
// };

// // Function to check schedule and send SMS
// const checkScheduleAndSendSMS = (data: any) => {
//   const currentDate = new Date();

//   for (const item of data) {
//     const scheduleDate = new Date(item.scheduleDate);
//     // console.log('currentDate === scheduleDate', currentDate, scheduleDate);

//     if (currentDate === scheduleDate) {
//       sendSMS(item);
//     }
//   }

//   if (data.length === 0) {
//     // Stop the background service when the array length is 0
//     console.log('Stopping background service');
//     BackgroundService.stop();
//   }
// };

// const options = {
//   taskName: 'Send Wishes',
//   taskTitle: 'ExampleTask title',
//   taskDesc: 'ExampleTask description',
//   taskIcon: {
//     name: 'ic_launcher',
//     type: 'mipmap',
//   },
//   color: '#ff00ff',
//   linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
//   parameters: {
//     delay: 1000,
//   },
// };

// const veryIntensiveTask = async (taskDataArguments: any, dataArray: any) => {
//   // Example of an infinite loop task
//   const {delay} = taskDataArguments;
//   await new Promise(async () => {
//     for (let i = 0; BackgroundService.isRunning(); i++) {
//       console.log('id', i);

//       // Check schedule and send SMS logic
//       checkScheduleAndSendSMS(dataArray);

//       await sleep(delay);
//     }
//   });
// };

// const sleep = (time: any) =>
//   new Promise<void>(resolve => setTimeout(() => resolve(), time));

// const Index = () => {
//   //  use effect to call function to send notification
//   useEffect(() => {
//     const dataArray = [
//       {
//         createdAt: '22 February, 2024',
//         receiver: {
//           avatar:
//             'https://wishme.doubletree.xyz/assets/img/avatars/no_avatar.png',
//           fullName: 'kqjwjqweqwe',
//           number: '01723432423',
//         },
//         scheduleDate: '2024-02-22 17:21:50',
//       },
//     ];

//     const startBackgroundService = async () => {
//       await BackgroundService.start(
//         taskData => veryIntensiveTask(taskData, dataArray),
//         options,
//       );
//       await BackgroundService.updateNotification({
//         taskDesc: 'New ExampleTask description',
//       }); // Only Android, iOS will ignore this call
//     };

//     startBackgroundService();

//     return () => {
//       // Cleanup or stop background tasks if needed when the component unmounts
//       BackgroundService.stop();
//     };
//   }, []);

//   return <></>;
// };

// export default Index;
const Index = () => {
  return <></>;
};
export default Index;
