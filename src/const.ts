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
  SiteData = 'SITEDATA'
}

export enum ApiRoute {
  Products = '/products',
  LastReview = '/reviews/getLast'
}

export const STARS_COUNT = 5;
