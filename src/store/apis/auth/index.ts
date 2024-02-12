import {apiSlice} from '../index';
import {login} from '@store/features/authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    loginWithPassword: builder.mutation({
      query: body => ({
        url: 'auth/sign-in-with-password',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data: result} = await queryFulfilled;
          const {access_token, ...userInfo} = result?.data;
          if (result.data) {
            dispatch(
              login({
                user: userInfo,
                accessToken: access_token,
                refreshToken: access_token,
              }),
            );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
    }),
    loginWithOtp: builder.mutation({
      query: body => ({
        url: 'auth/sign-in-with-otp',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
        try {
          const {data: result} = await queryFulfilled;
          const {access_token, ...userInfo} = result?.data;
          if (result.data) {
            dispatch(
              login({
                user: userInfo,
                accessToken: access_token,
                refreshToken: access_token,
              }),
            );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
    }),
    register: builder.mutation({
      query: ({body, isImage}) => ({
        url: 'auth/sign-up',
        method: 'POST',
        body,
        headers: {file: isImage},
      }),
    }),
    passwordChange: builder.mutation({
      query: body => ({
        url: 'auth/password/change',
        method: 'PUT',
        body,
      }),
    }),
    forgetPassword: builder.mutation({
      query: body => ({
        url: 'auth/password/forget',
        method: 'POST',
        body,
      }),
    }),
    passwordReset: builder.mutation({
      query: body => ({
        url: 'auth/password/reset',
        method: 'POST',
        body,
      }),
    }),
    verifyNumberOtp: builder.mutation({
      query: body => ({
        url: 'otp/verify',
        method: 'POST',
        body,
      }),
    }),
    sendOtpNumber: builder.mutation({
      query: body => ({
        url: 'otp/send',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useRegisterMutation,
  useForgetPasswordMutation,
  usePasswordChangeMutation,
  usePasswordResetMutation,
  useSendOtpNumberMutation,
  useVerifyNumberOtpMutation,
  useLoginWithPasswordMutation,
  useLoginWithOtpMutation,
} = authApiSlice;
