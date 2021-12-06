import axios, { AxiosRequestConfig } from 'axios';

const apiCall = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const apiGet = <T>(
  url: string,
  params?: Record<string, unknown>,
  options: AxiosRequestConfig = {},
) => {
  return apiCall.get<T>(url, {
    params,
    ...options,
  });
};
