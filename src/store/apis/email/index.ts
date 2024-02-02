// /* eslint-disable import/order */
// import {
//   DeleteV1EmailDeleteIdSuccessfulResponse,
//   GetV1EmailGetSuccessfulResponse,
//   PostV1EmailAddRequestBody,
//   PostV1EmailAddSuccessfulResponse,
// } from '@/store/api';
// import queryString from 'query-string';
// import { apiSlice } from '..';
// import { TPaginatedInput } from '../author/types';

// export const emailApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getEmails: builder.query<GetV1EmailGetSuccessfulResponse, void>({
//       query: () => ({
//         url: 'email/get',
//       }),
//       providesTags: ['messages'],
//     }),
//     getMoreClientMessages: builder.query<GetV1EmailGetSuccessfulResponse, TPaginatedInput>({
//       query: (args) => ({
//         url: `email/get?${queryString.stringify(args)}`,
//       }),
//       async onQueryStarted(args, { dispatch, queryFulfilled }) {
//         try {
//           const result = await queryFulfilled;
//           if (result?.data?.data?.emails) {
//             const data = result?.data?.data?.emails || [];
//             const update = emailApiSlice.util.updateQueryData('getEmails', undefined, (draft) => {
//               draft?.data?.emails?.push(...data);
//               const { meta } = draft.data;
//               if (meta) {
//                 meta.total = result?.data?.data?.meta?.total ?? 0;
//                 meta.page = result?.data?.data?.meta?.page ?? 1;
//                 meta.limit = result?.data?.data?.meta?.limit ?? 10;
//               }
//             });
//             dispatch(update);
//           }
//           return result;
//         } catch (error: any) {
//           return error;
//         }
//       },
//       providesTags: ['messages'],
//     }),
//     addEmail: builder.mutation<PostV1EmailAddSuccessfulResponse, PostV1EmailAddRequestBody>({
//       query: (body) => ({
//         url: 'email/add',
//         method: 'POST',
//         body,
//       }),
//     }),
//     deleteEmail: builder.mutation<DeleteV1EmailDeleteIdSuccessfulResponse, string>({
//       query: (id) => ({
//         url: `email/delete/${id}`,
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

// export const {
//   useGetEmailsQuery,
//   useGetMoreClientMessagesQuery,
//   useAddEmailMutation,
//   useDeleteEmailMutation,
// } = emailApiSlice;
