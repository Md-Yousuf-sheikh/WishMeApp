import {
  DeleteV1BlogsDeleteIdParameterId,
  DeleteV1BlogsDeleteIdSuccessfulResponse,
  GetV1BlogsGetIdParameterId,
  GetV1BlogsGetIdSuccessfulResponse,
  GetV1BlogsGetSuccessfulResponse,
  GetV1BlogsTagsSuccessfulResponse,
  PostV1BlogsAddRequestBody,
  PostV1BlogsAddSuccessfulResponse,
  PutV1BlogsUpdateIdParameterId,
  PutV1BlogsUpdateIdSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBlogsTags: builder.query<GetV1BlogsTagsSuccessfulResponse, string>({
      query: id => ({
        url: `blogs/tags`,
      }),
    }),
    getSingleBlogsById: builder.query<
      GetV1BlogsGetIdSuccessfulResponse,
      GetV1BlogsGetIdParameterId
    >({
      query: id => ({
        url: `blogs/get/${id}`,
      }),
    }),
    getAllBlogs: builder.query<GetV1BlogsGetSuccessfulResponse, any>({
      query: () => ({
        url: `blogs/get`,
      }),
    }),
    deleteBlog: builder.mutation<
      DeleteV1BlogsDeleteIdSuccessfulResponse,
      DeleteV1BlogsDeleteIdParameterId
    >({
      query: id => ({
        url: `blogs/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateBlog: builder.mutation<
      PutV1BlogsUpdateIdSuccessfulResponse,
      PutV1BlogsUpdateIdParameterId
    >({
      query: id => ({
        url: `blogs/update/${id}`,
        method: 'PUT',
      }),
    }),
    addBlog: builder.mutation<
      PostV1BlogsAddSuccessfulResponse,
      PostV1BlogsAddRequestBody
    >({
      query: id => ({
        url: `blogs/update/${id}`,
        method: 'PUT',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useDeleteBlogMutation,
  useGetAllBlogsQuery,
  useGetBlogsTagsQuery,
  useGetSingleBlogsByIdQuery,
  useUpdateBlogMutation,
  useAddBlogMutation,
} = authApiSlice;
