// /* eslint-disable import/order */
// import {
//   DeleteV1BlogDeleteIdSuccessfulResponse,
//   GetV1BlogGetIdSuccessfulResponse,
//   GetV1BlogGetSuccessfulResponse,
//   GetV1BlogTagsSuccessfulResponse,
//   PostV1BlogAddRequestBody,
//   PostV1BlogAddSuccessfulResponse,
//   PutV1BlogUpdateIdSuccessfulResponse,
// } from '@/store/api';
// import queryString from 'query-string';
// import { apiSlice } from '..';
// import { IUpdateBlogBody, TPaginatedBlog } from './types';

// export const blogApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getBlogs: builder.query<GetV1BlogGetSuccessfulResponse, TPaginatedBlog>({
//       query: ({ type }) => ({
//         url: `blog/get?type=${type}`,
//       }),
//       providesTags: ['blogs'],
//     }),
//     getMoreBlogs: builder.query<GetV1BlogGetSuccessfulResponse, TPaginatedBlog>({
//       query: (args) => ({
//         url: `blog/get?${queryString.stringify(args)}`,
//       }),
//       async onQueryStarted(args, { dispatch, queryFulfilled }) {
//         try {
//           const result = await queryFulfilled;
//           if (result?.data?.data?.blogs) {
//             const data = result?.data?.data?.blogs || [];
//             const update = blogApiSlice.util.updateQueryData(
//               'getBlogs',
//               {
//                 type: args.type,
//               },
//               (draft) => {
//                 draft?.data?.blogs?.push(...data);
//                 const { meta } = draft.data;
//                 if (meta) {
//                   meta.total = result?.data?.data?.meta?.total ?? 0;
//                   meta.page = result?.data?.data?.meta?.page ?? 1;
//                   meta.limit = result?.data?.data?.meta?.limit ?? 6;
//                 }
//               }
//             );
//             dispatch(update);
//           }
//           return result;
//         } catch (error: any) {
//           return error;
//         }
//       },
//       providesTags: ['blogs'],
//     }),
//     getSingleBlog: builder.query<GetV1BlogGetIdSuccessfulResponse, string>({
//       query: (id) => ({
//         url: `blog/get/${id}`,
//       }),
//       providesTags: ['singleBlog'],
//     }),
//     addBlog: builder.mutation<PostV1BlogAddSuccessfulResponse, PostV1BlogAddRequestBody>({
//       query: (body) => ({
//         url: 'blog/add',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['blogs', 'singleBlog'],
//     }),
//     updateBlog: builder.mutation<PutV1BlogUpdateIdSuccessfulResponse, IUpdateBlogBody>({
//       query: ({ id, ...body }) => ({
//         url: `blog/update/${id}`,
//         method: 'PUT',
//         body,
//       }),
//       invalidatesTags: ['blogs', 'singleBlog'],
//     }),
//     deleteBlog: builder.mutation<DeleteV1BlogDeleteIdSuccessfulResponse, string>({
//       query: (id) => ({
//         url: `blog/delete/${id}`,
//         method: 'DELETE',
//       }),
//       invalidatesTags: ['blogs', 'singleBlog'],
//     }),
//     getTags: builder.query<GetV1BlogTagsSuccessfulResponse, void>({
//       query: () => ({
//         url: 'blog/tags',
//       }),
//     }),
//   }),
// });

// export const {
//   useGetBlogsQuery,
//   useGetMoreBlogsQuery,
//   useGetSingleBlogQuery,
//   useAddBlogMutation,
//   useUpdateBlogMutation,
//   useDeleteBlogMutation,
//   useGetTagsQuery,
//   useLazyGetSingleBlogQuery,
// } = blogApiSlice;
