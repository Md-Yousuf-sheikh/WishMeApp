import {API_URL} from '@env';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {RootState} from '..';

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, api) => {
    const {auth}: any = api.getState() as RootState;
    if (auth.accessToken) {
      headers.set('authorization', `Bearer ${auth.accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (
  args: any,
  api: any,
  extraOptions: any,
): Promise<any> => {
  const result = await baseQuery(args, api, extraOptions);
  const status = result?.meta?.response?.status;
  const unauthorizedStatuses = [401, 403, 400];
  if (status && unauthorizedStatuses.includes(status)) {
    // api.dispatch(logout());
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['ProfileUpdate'],
  endpoints: () => ({}),
});

export default apiSlice.reducer;
