export type TEvent = {
  id: number | string;
  thumbnail?: string;
  title: string;
  summary?: string;
  date: string;
  time: string;
  venue: string;
  user: {
    id: number | string;
    avatar?: string;
    surname: string;
    other_names: string;
  };
  attendance?: {
    total: number | string;
    male: number | string;
    female: number | string;
  };
  created_at: string;
};