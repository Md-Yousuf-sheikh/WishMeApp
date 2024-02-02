import {apiSlice} from '../index';
import {login} from '@store/features/authSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: body => ({
        url: 'auth/login',
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
        url: 'auth/register',
        method: 'POST',
        body,
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
    verifyOtp: builder.mutation({
      query: body => ({
        url: 'auth/verify-otp',
        method: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useForgetPasswordMutation,
  usePasswordChangeMutation,
  usePasswordResetMutation,
  useVerifyOtpMutation,
} = authApiSlice;
