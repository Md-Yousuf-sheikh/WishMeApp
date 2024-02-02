import {
  DeleteV1ProfileDeleteIdParameterId,
  DeleteV1ProfileDeleteIdSuccessfulResponse,
  GetV1ProfileGetAllSuccessfulResponse,
  GetV1ProfileGetSingleIdParameterId,
  GetV1ProfileGetSingleIdSuccessfulResponse,
  GetV1ProfileGetSingleSuccessfulResponse,
  PostV1FileDeleteRequestBody,
  PostV1FileDeleteSuccessfulResponse,
  PostV1FileUploadRequestBody,
  PostV1FileUploadSuccessfulResponse,
  PostV1ProfileUpdateRequestBody,
  PostV1ProfileUpdateSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleProfile: builder.query<
      GetV1ProfileGetSingleSuccessfulResponse,
      void
    >({
      query: () => ({
        url: `profile/get/single`,
      }),
      providesTags: ['ProfileUpdate'],
    }),
    getSingleProfileById: builder.query<
      GetV1ProfileGetSingleIdSuccessfulResponse,
      GetV1ProfileGetSingleIdParameterId
    >({
      query: id => ({
        url: `profile/get/single/${id}`,
      }),
    }),
    getAllProfile: builder.query<GetV1ProfileGetAllSuccessfulResponse, string>({
      query: () => ({
        url: `profile/get/all`,
      }),
    }),
    updateProfile: builder.mutation<
      PostV1ProfileUpdateSuccessfulResponse,
      PostV1ProfileUpdateRequestBody
    >({
      query: body => ({
        url: 'profile/update',
        method: 'POST',
        body,
      }),
      async onQueryStarted(args, {dispatch, queryFulfilled}) {
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
    deleteProfile: builder.mutation<
      DeleteV1ProfileDeleteIdSuccessfulResponse,
      DeleteV1ProfileDeleteIdParameterId
    >({
      query: id => ({
        url: `auth/profile/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateFile: builder.mutation<
      PostV1FileUploadSuccessfulResponse,
      PostV1FileUploadRequestBody
    >({
      query: body => ({
        url: 'file/upload',
        method: 'POST',
        body,
      }),
    }),
    deleteFile: builder.mutation<
      PostV1FileDeleteSuccessfulResponse,
      PostV1FileDeleteRequestBody
    >({
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
  useGetAllProfileQuery,
  useGetSingleProfileByIdQuery,
  useGetSingleProfileQuery,
  useDeleteProfileMutation,
  useUpdateFileMutation,
  useDeleteFileMutation,
} = authApiSlice;
