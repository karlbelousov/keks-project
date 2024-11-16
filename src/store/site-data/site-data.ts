import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SiteData } from '../../types/state';
import { fetchLastReview, fetchProducts } from '../action';

const initialState: SiteData = {
  products: [],
  lastReview: null,
  isLastReviewLoading: false,
  isProductsLoading: false
};

export const siteData = createSlice({
  name: NameSpace.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isProductsLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isProductsLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isProductsLoading = false;
      })
      .addCase(fetchLastReview.pending, (state) => {
        state.isLastReviewLoading = true;
      })
      .addCase(fetchLastReview.fulfilled, (state, action) => {
        state.isLastReviewLoading = false;
        state.lastReview = action.payload;
      })
      .addCase(fetchLastReview.rejected, (state) => {
        state.isLastReviewLoading = false;
      });
  },
});
