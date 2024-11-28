import { Coords, MapAddress } from './types/map-address';

export enum AppRoutes {
  Main ='/',
  Catalog = '/catalog',
  Favorites = '/favorites',
  Product = '/product',
  Login = '/login',
  Register = '/register'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  User = 'USER',
  SiteData = 'SITE_DATA',
  SiteProcess = 'SITE_PROCESS'
}

export enum ApiRoute {
  Products = '/products',
  LastReview = '/reviews/getLast'
}

export const STARS_COUNT = 5;

export const mapAddresses: MapAddress[] = [
  {
    id: 1,
    title: ' Кондитерская 1',
    address: 'Морской пр. 2А',
    type: 'confectionery',
    coords: {
      lat: 59.970969,
      lng: 30.316252,
    },
  },
  {
    id: 2,
    title: ' Кондитерская 2',
    address: 'Морской пр. 2А',
    type: 'confectionery',
    coords: {
      lat: 59.970969,
      lng: 30.274708,
    },
  },
  {
    id: 3,
    title: 'Производство',
    address: 'Морской пр. 2А',
    type: 'production',
    coords: {
      lat: 59.960380,
      lng: 30.308725,
    },
  },
];

export const MAP_CENTER: Coords = {
  lat: 59.960380,
  lng: 30.308725,
};
