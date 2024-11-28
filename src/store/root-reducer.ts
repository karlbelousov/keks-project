import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {userProcess} from './user-process/user-process';
import { siteData } from './site-data/site-data';
import { siteProcess } from './site-process/site-process';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.SiteData]: siteData.reducer,
  [NameSpace.SiteProcess]: siteProcess.reducer
});
