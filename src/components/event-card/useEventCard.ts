import type { TProps } from "@/types/common";
import EventService from "@/services/Event.service";

export default function useEventCard(props: TProps) {
  const data = props?.event ? EventService.eventPipe(props.event) : [];

  const styles = {
    // backgroundImage: EventService.bgImg(),
    backgroundImage: `url(${data.thumbnail})`,
  };
  //
  return { data, styles };
}
