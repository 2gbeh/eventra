
import type { TProps } from "@/types/common.type";
import EventService from "@/services/Event.service";
import AttendanceService from "@/services/Attendance.service";
// 
import fakeEvents from "@/data/fake-events";
import fakeAttendance from "@/data/fake-attendance";

export default function useEventView(props: TProps) {
  const eventId = props?.eventId as number;
  const event = fakeEvents[eventId];

  return {
    event: EventService.eventPipe(event),
    attendance: AttendanceService.avatarStack(fakeAttendance),
  };
}
