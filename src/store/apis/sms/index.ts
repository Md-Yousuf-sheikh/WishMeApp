import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSmaPlan: builder.query({
      query: () => ({
        url: 'sms-plans',
      }),
    }),
    orderSmsPlan: builder.mutation({
      query: body => ({
        url: 'orders/sms-plan',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Wish'],
    }),
  }),
  overrideExisting: true,
});

export const {useOrderSmsPlanMutation, useGetSmaPlanQuery} = authApiSlice;
