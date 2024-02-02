import {
  DeleteV1IngredientsDeleteIdParameterId,
  DeleteV1IngredientsDeleteIdSuccessfulResponse,
  GetV1IngredientsGetIdParameterId,
  GetV1IngredientsGetIdSuccessfulResponse,
  PostV1IngredientsAddRequestBody,
  PostV1IngredientsAddSuccessfulResponse,
  PostV1IngredientsGetRequestBody,
  PostV1IngredientsGetSuccessfulResponse,
  PutV1IngredientsUpdateRequestBody,
  PutV1IngredientsUpdateSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleIngredientsById: builder.query<
      GetV1IngredientsGetIdSuccessfulResponse,
      GetV1IngredientsGetIdParameterId
    >({
      query: id => ({
        url: `ingredients/get/${id}`,
      }),
    }),
    // getAllIngredients: builder.query<any, string>({
    //   query: () => ({
    //     url: `ingredients/get/all`,
    //   }),
    // }),
    allIngredients: builder.mutation<
      PostV1IngredientsGetSuccessfulResponse,
      PostV1IngredientsGetRequestBody
    >({
      query: id => ({
        url: `ingredients/get/all`,
        method: 'DELETE',
      }),
    }),
    deleteIngredients: builder.mutation<
      DeleteV1IngredientsDeleteIdSuccessfulResponse,
      DeleteV1IngredientsDeleteIdParameterId
    >({
      query: id => ({
        url: `ingredients/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateIngredients: builder.mutation<
      PutV1IngredientsUpdateSuccessfulResponse,
      PutV1IngredientsUpdateRequestBody
    >({
      query: id => ({
        url: `ingredients/update/${id}`,
        method: 'PUT',
      }),
    }),
    addIngredients: builder.mutation<
      PostV1IngredientsAddSuccessfulResponse,
      PostV1IngredientsAddRequestBody
    >({
      query: id => ({
        url: `ingredients/update/${id}`,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddIngredientsMutation,
  useAllIngredientsMutation,
  useDeleteIngredientsMutation,
  useGetSingleIngredientsByIdQuery,
  useLazyGetSingleIngredientsByIdQuery,
  useUpdateIngredientsMutation,
} = authApiSlice;
