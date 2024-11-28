import {store} from '../store/index';
import {AuthorizationStatus} from '../const';
import { Product } from './product';
import { Review } from './review';
import { MapAddress } from './map-address';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};

export type SiteData = {
  products: Product[];
  isProductsLoading: boolean;
  lastReview: Review | null;
  isLastReviewLoading: boolean;
};

export type SiteProcess = {
  mapAddresses: MapAddress[];
  activeIdMapAddress: MapAddress['id'];
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
