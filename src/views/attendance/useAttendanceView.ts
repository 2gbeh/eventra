import { ref, reactive, computed } from "vue";
import AttendanceService from "@/services/Attendance.service";
import attendance from "@/data/fake-attendance";
//
import type { TProps, TCollection, TDocument } from "@/types/common";

// import fakerHelper from "@/lib/faker-js/main";
// fakerHelper.log(fakerHelper.getCollection);

export default function useAttendanceView(props?: TProps) {
  const showAll = ref(true);
  const data = reactive<{ attendance: TCollection }>({ attendance });
  const dataPipe = computed(() => AttendanceService.attended(data.attendance));
  //
  function toggleShowAll() {
    showAll.value = !showAll.value;
  }
  function toggleStatus(ev: Event) {
    let userId = (ev.target as HTMLInputElement).value;
    let { index, item } = AttendanceService.updateStatus(
      data.attendance,
      userId,
    );
    index > -1 && (data.attendance[index] = item);

    // console.log("🚀 ~ toggleStatus ~ toggleStatus:", userId);
  }
  //
  return {
    showAll,
    toggleShowAll,
    data,
    dataPipe,
    toggleStatus,
  };
}
