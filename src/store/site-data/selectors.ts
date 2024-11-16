import { NameSpace } from '../../const';
import { Product } from '../../types/product';
import { Review } from '../../types/review';
import { State } from '../../types/state';

export const getIsProductsLoading = ({ [NameSpace.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isProductsLoading;
export const getProducts = ({ [NameSpace.SiteData]: SITE_DATA}: State): Product[] => SITE_DATA.products;

export const getIsLastReviewLoading = ({ [NameSpace.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isLastReviewLoading;
export const getLastReview = ({ [NameSpace.SiteData]: SITE_DATA}: State): Review | null => SITE_DATA.lastReview;
