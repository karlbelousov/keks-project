import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ApiRoute } from '../const';
import { Product } from '../types/product';
import { Review } from '../types/review';

export const Action = {
  FETCH_PRODUCTS: 'products/fetch',
  FETCH_LAST_REVIEW: 'last-review/fetch'
};

export const fetchProducts = createAsyncThunk<Product[], undefined, { extra: AxiosInstance }>(
  Action.FETCH_PRODUCTS,
  async (_, { extra: api }) => {
    const { data } = await api.get<Product[]>(ApiRoute.Products);

    return data;
  });

export const fetchLastReview = createAsyncThunk<Review, undefined, { extra: AxiosInstance }>(
  Action.FETCH_LAST_REVIEW,
  async (_, { extra: api }) => {
    const { data } = await api.get<Review>(ApiRoute.LastReview);

    return data;
  });
