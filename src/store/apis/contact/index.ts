// import {
//   GetV1ContactGetSuccessfulResponse,
//   PostV1ContactUpdateRequestBody,
//   PostV1ContactUpdateSuccessfulResponse,
// } from '@/store/api';
// import { apiSlice } from '..';

// export const contactApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     getContacts: builder.query<GetV1ContactGetSuccessfulResponse, void>({
//       query: () => ({
//         url: 'contact/get',
//       }),
//       providesTags: ['contacts'],
//     }),
//     updateContacts: builder.mutation<
//       PostV1ContactUpdateSuccessfulResponse,
//       PostV1ContactUpdateRequestBody
//     >({
//       query: (body) => ({
//         url: 'contact/update',
//         method: 'POST',
//         body,
//       }),
//       invalidatesTags: ['contacts'],
//     }),
//   }),
// });

// export const { useGetContactsQuery, useUpdateContactsMutation } = contactApiSlice;
