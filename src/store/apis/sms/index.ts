import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSmaPlan: builder.query({
      query: props => ({
        url: `sms-plans${props}`,
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
