import {
  DeleteV1MealPlanDeleteIdParameterId,
  DeleteV1MealPlanDeleteIdSuccessfulResponse,
  GetV1MealPlanGetParameterDay,
  GetV1MealPlanGetSuccessfulResponse,
  PostV1MealPlanUpdateRequestBody,
  PostV1MealPlanUpdateSuccessfulResponse,
} from '@store/schema';
import {apiSlice} from '../index';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllMealPlan: builder.query<
      GetV1MealPlanGetSuccessfulResponse,
      GetV1MealPlanGetParameterDay
    >({
      query: day => {
        return {
          url: `meal-plan/get?day=${day}`,
        };
      },
    }),
    deleteMealPlan: builder.mutation<
      DeleteV1MealPlanDeleteIdSuccessfulResponse,
      DeleteV1MealPlanDeleteIdParameterId
    >({
      query: id => ({
        url: `meal-plan/delete/${id}`,
        method: 'DELETE',
      }),
    }),
    updateMealPlan: builder.mutation<
      PostV1MealPlanUpdateSuccessfulResponse,
      PostV1MealPlanUpdateRequestBody
    >({
      query: id => ({
        url: `meal-plan/update/${id}`,
        method: 'POST',
      }),
    }),
  }),
  overrideExisting: true,
});

export const {
  useDeleteMealPlanMutation,
  useGetAllMealPlanQuery,
  useUpdateMealPlanMutation,
} = authApiSlice;
