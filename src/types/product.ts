export type CategoryProduct = ' bisque' | 'cheesecake' | 'shortbread' | 'dessert';
export type TypeProduct = 'chocolate' | 'vanilla' | 'vegetarian' | 'honey-cake' | 'lemon' |
                         'new-york' | 'tart' | 'funnel-cake' | 'basket-cake' |
                         'chocolate-muffi' | 'brand-muffin';

export type Product = {
  id: string;
  title: string;
  category: CategoryProduct;
  type: TypeProduct;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
  description: string;
  images: [string];
  weight: number;
  rating: number;
  reviewCount: number;
}
