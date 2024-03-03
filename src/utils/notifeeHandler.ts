// import notifee, {
//   AndroidCategory,
//   AndroidImportance,
// } from '@notifee/react-native';
// import {nanoid} from '@reduxjs/toolkit';
// import {callApiSlice} from '@store/apis/call';
// import store from '@store/index';

// interface MessageData {
//   collapseKey: string;
//   data: {
//     notifee: string;
//   };
//   from: string;
//   messageId: string;
//   notification: {
//     android: any;
//     body: string;
//     title: string;
//   };
//   sentTime: number;
//   ttl: number;
// }

// export interface NotificationData<T> {
//   title: string;
//   body: string;
//   type: 'call' | 'notification' | 'chat';
//   data: T;
// }

// export interface Data {
//   channelName: string;
//   type: string;
//   from: string;
//   to: string;
//   uid: number;
//   senderProfile: SenderProfile;
// }

// export interface SenderProfile {
//   _id: string;
//   fullName: string;
//   userId: string;
//   avatar: string;
//   role: string;
// }

// export enum ChannelIds {
//   CALL = 'call',
//   CHAT = 'chat',
//   NOTIFICATION = 'notification',
//   DEFAULT = 'default',
// }

// export enum PressActionIds {
//   ACCEPT = 'Accept',
//   DECLINE = 'Decline',
//   VIEW_CHAT = 'viewChat',
//   VIEW_NOTIFICATION = 'viewNotification',
//   DEFAULT = 'default',
// }

// async function onMessageReceived(message: MessageData) {
//   const notification = (
//     message?.data?.notifee ? JSON.parse(message?.data?.notifee) : {}
//   ) as NotificationData<Data>;

//   const data = notification?.data ? notification?.data : {};

//   // call
//   if (notification?.type === ChannelIds.CALL) {
//     await notifee.createChannel({
//       id: ChannelIds.CALL,
//       name: 'Incoming',
//       sound: 'default',
//       importance: AndroidImportance.HIGH,
//     });
//     const callNotificationId = nanoid();
//     await notifee.displayNotification({
//       id: callNotificationId,
//       title: notification?.title,
//       body: notification?.body,
//       subtitle: 'Call',

//       android: {
//         channelId: ChannelIds.CALL,

//         pressAction: {
//           id: 'call',
//           launchActivity: 'com.ppfitness.app.MainActivity',
//         },
//         category: AndroidCategory.CALL,
//         // fullScreenAction: {
//         //   // For custom component:
//         //   id: 'call',
//         //   // mainComponent: <CustomCallComponent/>,
//         //   launchActivity: 'com.ppfitness.app.MainActivity',

//         // },
//         timestamp: Date.now(),
//         autoCancel: false,
//         actions: [
//           {
//             title: 'Accept',
//             pressAction: {
//               id: PressActionIds.ACCEPT,
//             },
//           },
//           {
//             title: 'Decline',
//             pressAction: {
//               id: PressActionIds.DECLINE,
//             },
//           },
//         ],
//       },

//       ios: {
//         foregroundPresentationOptions: {
//           badge: true,
//           sound: true,
//           banner: true,
//           list: true,
//         },
//       },
//       data: data,
//     });
//     const oneMinute = 60000;
//     setTimeout(async () => {
//       notifee.cancelNotification(callNotificationId);
//       await store.dispatch(
//         callApiSlice.endpoints.declineCall.initiate({
//           channelName: notification?.data?.channelName,
//           type: 'not-responded',
//         }),
//       );
//       await notifee.createChannel({
//         id: ChannelIds.DEFAULT,
//         name: 'Notification',
//         lights: true,
//       });

//       await notifee.displayNotification({
//         title: 'Missed Call',
//         body: 'You have a missed call',
//         android: {
//           channelId: ChannelIds.DEFAULT,
//           pressAction: {
//             id: 'default',
//             launchActivity: 'com.ppfitness.app.MainActivity',
//           },
//         },
//         ios: {
//           foregroundPresentationOptions: {
//             badge: true,
//             sound: true,
//             banner: true,
//             list: true,
//           },
//         },
//       });
//     }, oneMinute);
//   } else if (notification?.type === ChannelIds.CHAT) {
//     await notifee.createChannel({
//       id: ChannelIds.CHAT,
//       name: 'Chat Message',
//       lights: true,
//     });

//     const androidStyle: any = {};
//     await notifee.displayNotification({
//       title: notification?.title,
//       body: notification?.body,

//       android: {
//         channelId: ChannelIds.CHAT,
//         pressAction: {
//           id: PressActionIds.VIEW_CHAT,
//           launchActivity: 'com.ppfitness.app.MainActivity',
//         },
//         ...androidStyle,
//       },
//       ios: {
//         foregroundPresentationOptions: {
//           badge: true,
//           sound: true,
//           banner: true,
//           list: true,
//         },
//       },
//       data: data,
//     });
//   } else if (notification?.type === ChannelIds.NOTIFICATION) {
//     await notifee.createChannel({
//       id: ChannelIds.NOTIFICATION,
//       name: 'Notification',
//       lights: true,
//     });
//     const androidStyle: any = {};
//     await notifee.displayNotification({
//       title: notification?.title,
//       body: notification?.body,
//       android: {
//         channelId: ChannelIds.NOTIFICATION,
//         pressAction: {
//           id: 'default',
//           launchActivity: 'com.ppfitness.app.MainActivity',
//         },
//         ...androidStyle,
//       },
//       ios: {
//         foregroundPresentationOptions: {
//           badge: true,
//           sound: true,
//           banner: true,
//           list: true,
//         },
//       },
//       data: data,
//     });
//   } else {
//     await notifee.createChannel({
//       id: ChannelIds.DEFAULT,
//       name: 'Notification',
//       lights: true,
//       sound: 'default',
//     });
//     const androidStyle: any = {};
//     await notifee.displayNotification({
//       title: message?.notification.title,
//       body: message?.notification.body,

//       android: {
//         channelId: ChannelIds.DEFAULT,
//         ...androidStyle,
//       },
//       ios: {
//         foregroundPresentationOptions: {
//           badge: true,
//           sound: true,
//           banner: true,
//           list: true,
//         },
//       },
//       data: data,
//     });
//   }
// }

// export default onMessageReceived;
