import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getWishCategory: builder.query({
      query: () => ({
        url: 'wish/types',
      }),
    }),
    getWishWithType: builder.query({
      query: typeId => ({
        url: `wish/type/${typeId}/templates?perPage=10`,
      }),
    }),
    createWish: builder.mutation({
      query: body => ({
        url: 'wish',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Wish'],
    }),
    updateWish: builder.mutation({
      query: body => ({
        url: 'my/wish/delete',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: ['Wish'],
    }),
    deleteWish: builder.mutation({
      query: body => ({
        url: 'my/wish/update',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Wish'],
    }),
  }),
  overrideExisting: true,
});

export const {
  useCreateWishMutation,
  useGetWishCategoryQuery,
  useGetWishWithTypeQuery,
  useUpdateWishMutation,
  useDeleteWishMutation,
} = authApiSlice;
