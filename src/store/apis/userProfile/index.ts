import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleProfileById: builder.query({
      query: id => ({
        url: `profile/get/single/${id}`,
      }),
    }),

    updateProfile: builder.mutation({
      query: body => ({
        url: 'profile/update',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {queryFulfilled}) {
        try {
          const {data: result} = await queryFulfilled;

          if (result.data) {
            // dispatch(
            //   setProfile({
            //     ...result.data,
            //   }),
            // );
          }

          return result;
        } catch (error: any) {
          return error;
        }
      },
      invalidatesTags: ['ProfileUpdate'],
    }),
    deleteProfile: builder.mutation({
      query: id => ({
        url: `auth/profile/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateFile: builder.mutation({
      query: body => ({
        url: 'file/upload',
        method: 'POST',
        body,
      }),
    }),
    deleteFile: builder.mutation({
      query: id => ({
        url: `file/delete/${id}`,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useUpdateProfileMutation,
  useGetSingleProfileByIdQuery,
  useDeleteProfileMutation,
  useUpdateFileMutation,
  useDeleteFileMutation,
} = authApiSlice;
