// import queryString from 'query-string';
// import {
//   DeleteV1ClientMessagesDeleteIdSuccessfulResponse,
//   GetV1ClientMessagesGetIdSuccessfulResponse,
//   GetV1ClientMessagesGetSuccessfulResponse,
//   PostV1ClientMessagesAddRequestBody,
//   PostV1ClientMessagesAddSuccessfulResponse,
// } from '@/store/api';
// import { apiSlice } from '..';
// import { TPaginatedInput } from '../author/types';

// export const clientMessageApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getClientMessages: builder.query<GetV1ClientMessagesGetSuccessfulResponse, void>({
//       query: () => ({
//         url: 'clientMessages/get',
//       }),
//       providesTags: ['messages'],
//     }),
//     getMoreClientMessages: builder.query<GetV1ClientMessagesGetSuccessfulResponse, TPaginatedInput>(
//       {
//         query: (args) => ({
//           url: `clientMessages/get?${queryString.stringify(args)}`,
//         }),
//         async onQueryStarted(args, { dispatch, queryFulfilled }) {
//           try {
//             const result = await queryFulfilled;
//             if (result?.data?.data?.clientMessages) {
//               const data = result?.data?.data?.clientMessages || [];
//               const update = clientMessageApiSlice.util.updateQueryData(
//                 'getClientMessages',
//                 undefined,
//                 (draft) => {
//                   draft?.data?.clientMessages?.push(...data);
//                    const { meta } = draft.data;
//                    if (meta) {
//                      meta.total = result?.data?.data?.meta?.total ?? 0;
//                      meta.page = result?.data?.data?.meta?.page ?? 1;
//                      meta.limit = result?.data?.data?.meta?.limit ?? 10;
//                    }
//                 }
//               );
//               dispatch(update);
//             }
//             return result;
//           } catch (error: any) {
//             return error;
//           }
//         },
//         providesTags: ['messages'],
//       }
//     ),
//     getSingleClientMessage: builder.query<GetV1ClientMessagesGetIdSuccessfulResponse, string>({
//       query: (id) => ({
//         url: `clientMessages/get/${id}`,
//       }),
//       providesTags: ['singleMessage'],
//     }),
//     addClientMessage: builder.mutation<
//       PostV1ClientMessagesAddSuccessfulResponse,
//       PostV1ClientMessagesAddRequestBody
//     >({
//       query: (body) => ({
//         url: 'clientMessages/add',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['messages', 'singleMessage'],
//     }),
//     deleteClientMessage: builder.mutation<DeleteV1ClientMessagesDeleteIdSuccessfulResponse, string>(
//       {
//         query: (id) => ({
//           url: `clientMessages/delete/${id}`,
//           method: 'DELETE',
//         }),
//         invalidatesTags: ['messages', 'singleMessage'],
//       }
//     ),
//   }),
// });

// export const {
//   useGetClientMessagesQuery,
//   useGetMoreClientMessagesQuery,
//   useGetSingleClientMessageQuery,
//   useAddClientMessageMutation,
//   useDeleteClientMessageMutation,
// } = clientMessageApiSlice;
