import type { TCollection, TDocument, TId } from "@/types/common";

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
}
