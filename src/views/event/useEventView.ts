import { ref } from "vue";
import type { TProps } from "@/types/common.type";
import EventService from "@/services/Event.service";
import AttendanceService from "@/services/Attendance.service";
import useNavigator from "@/hooks/useNavigator";
//
import fakeEvents from "@/data/fake-events";
import fakeAttendance from "@/data/fake-attendance";
import { zzz } from "@/utils";

export default function useEventView(props: TProps) {
  const eventId = props?.eventId as number;
  const event = fakeEvents[eventId];
  //
  const nav = useNavigator();
  const editing = ref(false);
  const deleting = ref(false);
  const showEditModal = ref(false);
  const showDeleteModal = ref(false);
  //
  const toggleEditModal = () =>
    (showEditModal.value = !showEditModal.value);

  const toggleDeleteModal = () =>
    (showDeleteModal.value = !showDeleteModal.value);

  async function handleEdit() {
    editing.value = true;
    await zzz();
    editing.value = false;
    toggleEditModal()
  }

  async function handleDelete() {
    deleting.value = true;
    await zzz();
    deleting.value = false;
    nav(["dashboard"]);
  }
  //
  return {
    event: EventService.eventPipe(event),
    attendance: AttendanceService.avatarStack(fakeAttendance),
    //
    showEditModal,
    toggleEditModal,
    handleEdit,
    editing,
    // 
    showDeleteModal,
    toggleDeleteModal,
    handleDelete,
    deleting,
  };
}
