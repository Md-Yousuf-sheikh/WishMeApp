import {setProfile} from '@store/features/authSlice';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getReferral: builder.query({
      query: props => ({
        url: `my/referral-links${props}`,
      }),
      providesTags: ['Referral'],
    }),
    getProfile: builder.query({
      query: () => ({
        url: 'my/information',
      }),
    }),
    getMyWishList: builder.query({
      query: props => ({
        url: `my/wish/lists${props}`,
      }),
      providesTags: ['Wish'],
    }),
    getMySmaPlan: builder.query({
      query: () => ({
        url: 'my/sms-plan',
      }),
      transformResponse: response => {
        return response.data;
      },
    }),
    getReferralLinks: builder.query({
      query: () => ({
        url: 'referral-links?status=active',
      }),
    }),
    updateAvatar: builder.mutation({
      query: body => ({
        url: 'my/avatar/update',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {queryFulfilled, dispatch}) {
        try {
          const {data: result} = await queryFulfilled;
          console.log('result', result);

          if (result.data) {
            dispatch(
              setProfile({
                ...result.data,
              }),
            );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
      invalidatesTags: ['ProfileUpdate'],
    }),
    updateProfile: builder.mutation({
      query: ({body, isImage}) => ({
        url: 'my/profile/update',
        method: 'POST',
        body: body,
        headers: {file: isImage},
      }),
      async onQueryStarted(args, {queryFulfilled, dispatch}) {
        try {
          const {data: result} = await queryFulfilled;
          console.log('result', result);

          if (result.data) {
            dispatch(
              setProfile({
                ...result.data,
              }),
            );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
      invalidatesTags: ['ProfileUpdate'],
    }),
    updateName: builder.mutation({
      query: body => ({
        url: 'my/name/update',
        method: 'PUT',
        body,
      }),
      async onQueryStarted(args, {queryFulfilled, dispatch}) {
        try {
          const {data: result} = await queryFulfilled;
          if (result.data) {
            dispatch(
              setProfile({
                ...result.data,
              }),
            );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
      invalidatesTags: ['ProfileUpdate'],
    }),
    updateNumber: builder.mutation({
      query: body => ({
        url: 'my/number/update',
        method: 'PUT',
        body,
      }),
      async onQueryStarted(args, {queryFulfilled, dispatch}) {
        try {
          const {data: result} = await queryFulfilled;
          if (result.data) {
            dispatch(
              setProfile({
                ...result.data,
              }),
            );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
      invalidatesTags: ['ProfileUpdate'],
    }),
    createReferral: builder.mutation({
      query: body => ({
        url: 'referral-links/create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Referral'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useUpdateAvatarMutation,
  useGetMyWishListQuery,
  useGetProfileQuery,
  useGetReferralLinksQuery,
  useUpdateNameMutation,
  useUpdateNumberMutation,
  useUpdateProfileMutation,
  useCreateReferralMutation,
  useGetReferralQuery,
  useGetMySmaPlanQuery,
} = authApiSlice;
