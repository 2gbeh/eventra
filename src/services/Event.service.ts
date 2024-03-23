import { $, rand } from "@/utils";
import date from "@/utils/phpDateFormat";

export default class EventService {
  static bgImg(n?: number) {
    const i = n ?? rand(1, 6);
    return `url('/uploads/thumbnial-${i}.jpg')`;
  }

  static eventPipe(e: {}) {
    let m = rand(1, 100);
    let f = 100 - m;
    //
    return {
      ...e,
      f_date_day: date(e.date, "j"),
      f_date_month: date(e.date, "M"),
      f_user_name: e.user.other_names[0] + ", " + e.user.surname + ".",
      f_attendance_total: $(e.attendance.total.toString().slice(0, 4)),
      f_attendance_male: m,
      f_attendance_female: f,
    };
  }
}
