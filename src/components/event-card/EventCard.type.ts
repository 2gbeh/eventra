export type TEventCard = {
  id: number | string;
  thumbnail?: string;
  title: string;
  summary?: string;
  date: string;
  user: {
    id: number | string;
    avatar?: string;
    name: string;
  };
  attendance?: {
    total: number | string;
    male: number | string;
    female: number | string;
  };
};