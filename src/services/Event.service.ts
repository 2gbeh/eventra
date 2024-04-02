import { $, rand } from "@/utils";
import date from "@/utils/phpDateFormat";

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

export default class EventService {
  // static bgImg(n?: number) {
  //   const i = n ?? rand(1, 6);
  //   return `url('/uploads/thumbnial-${i}.jpg')`;
  // }

  // static styles (){

  //   const styles = {
  //   card: {
  //     backgroundImage: EventService.bgImg(),
  //     // backgroundImage: `url(${data.thumbnail})`,
  //     maxWidth: 100,
  //   },
  //   time: {
  //     border: {
  //       borderBottom: "2px solid",
  //       borderColor: (props.index as number) < 1 ? "#16BC00" : "#D81B60",
  //     },
  //   },
  // };

  static eventPipe(e: TEvent) {
    let m = rand(1, 100);
    let f = 100 - m;
    //
    return {
      ...e,
      f_date_day: date(e!.date, "j"),
      f_date_month: date(e.date, "M"),
      f_user_name: e.user.other_names[0] + ", " + e.user.surname + ".",
      f_attendance_total: e?.attendance?.total
        ? $(e.attendance?.total.toString().slice(0, 4))
        : 0,
      f_attendance_male: m,
      f_attendance_female: f,
    };
  }
}
