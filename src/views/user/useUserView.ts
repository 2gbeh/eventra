import { computed, ref } from "vue";
import type { TProps } from "@/types/common.type";
import AttendanceService from "@/services/Attendance.service";
import EventService from "@/services/Event.service";
//
import fakeEvents from "@/data/fake-events";
import fakeAttendance from "@/data/fake-attendance";
import type { TEvent } from "@/types/event.type";

export default function useUserView(props?: TProps) {
  const userId = props?.userId as number;
  const attendee = fakeAttendance[userId];
  //
  const eventIndex = ref(-1);
  const showEventModal = ref(false);
  const event = computed(() => {
    return eventIndex.value > -1
      ? EventService.eventPipe(fakeEvents[eventIndex.value])
      : null;
  });

  function toggleEventModal(i: number = -1) {
    console.log("what", i);
    if (i > -1) {
      eventIndex.value = i;
      showEventModal.value = true;
    } else {
      showEventModal.value = false;
    }
  }

  return {
    attendance: AttendanceService.avatarStack(fakeAttendance),
    attendee: AttendanceService.attendee(attendee),
    events: fakeEvents,
    event,
    showEventModal,
    toggleEventModal,
  };
}
