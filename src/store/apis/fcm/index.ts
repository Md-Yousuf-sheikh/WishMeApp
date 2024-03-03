import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    addFcmToken: builder.mutation({
      query: body => ({
        url: 'fcm/tokens',
        method: 'POST',
        body,
      }),
    }),
    deleteFcmToken: builder.mutation({
      query: props => ({
        url: `fcm/tokens${props}`,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {useAddFcmTokenMutation, useDeleteFcmTokenMutation} = authApiSlice;
