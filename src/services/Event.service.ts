import { $, rand } from "@/utils";
import date from "@/utils/phpDateFormat";
import ImageHelper from "@/utils/helpers/ImageHelper";

import type { TProps } from "@/types/common.type";
import type { TEvent } from "@/types/event.type";

export default class EventService {
  static styles(props: TProps) {
    // let i = props.index ?? rand(1, 6);
    let i = rand(1, 6);
    let fallback = `/uploads/thumbnial-${i}.jpg`;
    let image = (props.item as TEvent).thumbnail;
    //
    return {
      card: {
        backgroundImage: ImageHelper.url(image, fallback),
        maxWidth: 100,
      },
      time: {
        border: {
          borderBottom: "2px solid",
          borderColor: (props.index as number) < 1 ? "#16BC00" : "#D81B60",
        },
      },
    };
  }

  static eventPipe(e: TEvent) {
    let m = rand(1, 100);
    let f = 100 - m;
    //
    return {
      ...e,
      f_date_day: date(e.date, "j"),
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
