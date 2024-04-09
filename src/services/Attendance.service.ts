import type { TCollection, TDocument, TId } from "@/types/common.type";
import { live, rands } from "@/utils";

export default class AttendanceService {
  static attended = (data: TCollection) =>
    data
      ? data.filter((e: TDocument) => e?.status && (e.status as number) > 0)
      : [];

  static updateStatus(data: TCollection, id: TId) {
    let i = data.findIndex((e) => e.id == id);
    if (i > -1) {
      let status = Boolean(data[i].status) ? 0 : 1;
      let obj = { ...data[i], status };
      return { index: i, item: obj };
      // console.log(obj);
    }
    return { index: -1, item: {} };
  }

  static avatarStack = (data: TCollection) => {
    let [i, j, k, ...rest] = rands(0, data.length - 1, 3);
    let avatar1 = data[i];
    let avatar2 = data[j];
    let avatar3 = data[k];

    return {
      total: data.length,
      images: [avatar1, avatar2, avatar3],
      avatar: live,
    };
  };
}
