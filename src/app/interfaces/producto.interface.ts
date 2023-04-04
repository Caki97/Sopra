import { review } from './review.interface';

export interface producto {
  image: string;
  product: string;
  price: number;
  fav: boolean;
  currency: string;
  rating: number;
  description: string;
  similarProducts?: producto[];
  reviews?: review[];
}
