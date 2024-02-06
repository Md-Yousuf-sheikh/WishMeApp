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

          if (result.data.data) {
            dispatch(
              login({
                user: result.data.data?.user,
                accessToken: result.data.data?.accessToken,
                refreshToken: result.data.data?.refreshToken,
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
      query: body => ({
        url: 'auth/sign-up',
        method: 'POST',
        body,
        headers: {file: true},
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
  useLoginWithPasswordMutation
} = authApiSlice;
