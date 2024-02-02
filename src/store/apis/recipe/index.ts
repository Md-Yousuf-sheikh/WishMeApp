import {
  DeleteV1RecipeDeleteIdParameterId,
  DeleteV1RecipeDeleteIdSuccessfulResponse,
  GetV1RecipeGetIdParameterId,
  GetV1RecipeGetIdSuccessfulResponse,
  GetV1RecipeGetSuccessfulResponse,
  PostV1RecipeAddRequestBody,
  PostV1RecipeAddSuccessfulResponse,
  PutV1RecipeUpdateRequestBody,
  PutV1RecipeUpdateSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getSingleRecipeById: builder.query<
      GetV1RecipeGetIdSuccessfulResponse,
      GetV1RecipeGetIdParameterId
    >({
      query: id => ({
        url: `recipe/get/${id}`,
      }),
    }),
    getAllRecipe: builder.query<GetV1RecipeGetSuccessfulResponse, void>({
      query: () => ({
        url: `recipe/get`,
      }),
    }),
    deleteRecipe: builder.mutation<
      DeleteV1RecipeDeleteIdSuccessfulResponse,
      DeleteV1RecipeDeleteIdParameterId
    >({
      query: id => ({
        url: `recipe/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateRecipe: builder.mutation<
      PutV1RecipeUpdateSuccessfulResponse,
      PutV1RecipeUpdateRequestBody
    >({
      query: id => ({
        url: `recipe/update/${id}`,
        method: 'PUT',
      }),
    }),
    addRecipe: builder.mutation<
      PostV1RecipeAddSuccessfulResponse,
      PostV1RecipeAddRequestBody
    >({
      query: id => ({
        url: `recipe/update/${id}`,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useAddRecipeMutation,
  useDeleteRecipeMutation,
  useGetAllRecipeQuery,
  useGetSingleRecipeByIdQuery,
  useUpdateRecipeMutation,
} = authApiSlice;
