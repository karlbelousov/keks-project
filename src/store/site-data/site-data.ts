import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SiteData } from '../../types/state';

const initialState: SiteData = {
  products: [],
};

export const userProcess = createSlice({
  name: NameSpace.SiteData,
  initialState,
  reducers: {},
});
