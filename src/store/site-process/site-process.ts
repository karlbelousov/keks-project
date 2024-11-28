import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, mapAddresses } from '../../const';
import { SiteProcess } from '../../types/state';
import { MapAddress } from '../../types/map-address';


const initialState: SiteProcess = {
  mapAddresses: mapAddresses,
  activeIdMapAddress: mapAddresses[0].id
};

export const siteProcess = createSlice({
  name: NameSpace.SiteProcess,
  initialState,
  reducers: {
    setActiveIdMapAddress: (state, action: PayloadAction<MapAddress['id']>) => {
      state.activeIdMapAddress = action.payload;
    }
  },
});

export const { setActiveIdMapAddress } = siteProcess.actions;
