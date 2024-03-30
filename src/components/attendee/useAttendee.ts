import { useRouter } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
//
import type { TProps } from "@/types/common";
import EventService from "@/services/Event.service";

export default function useAttendee(props: TProps) {
  const router = useRouter();
  const _ = useGlobalProperties();
  //
  const data = props?.item ? EventService.eventPipe(props.item) : [];
  const styles = {
    card: {
      backgroundImage: EventService.bgImg(),
      // backgroundImage: `url(${data.thumbnail})`,
      maxWidth: 100,
    },
    time: {
      border: {
        borderBottom: "2px solid",
        borderColor: (props.index as number) < 1 ? "#16BC00" : "#D81B60",
      },
    },
  };

  function handleViewAttendance() {
    router.push(_.$PATH.attendance.toString());
  }
  //
  return { styles, data, handleViewAttendance };
}
