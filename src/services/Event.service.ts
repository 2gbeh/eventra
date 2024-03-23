import { rand } from "@/utils";

export default class EventService {
  static bgImg(n?: number) {
    const i = n ?? rand(1, 6);
    return `url('/uploads/thumbnial-${i}.jpg')`;
  }

  static eventPipe(e: {}) {
    return e
  }
}
