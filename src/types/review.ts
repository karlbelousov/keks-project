import { User } from './user';

export type Review = {
  id: string;
  isoDate: string;
  user: User;
  positive: string;
  negative: string;
  rating: number;
};
