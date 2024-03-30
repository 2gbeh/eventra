import { useRouter } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
//
import type { TProps } from "@/types/common";

export default function useAppBar(props: TProps) {
  const router = useRouter();
  const _ = useGlobalProperties();
  //
  function handleGoBack() {
    router.go(-1);
  }
  function handleEventDetails() {
    router.push({ name: "event", params: { id: 1 } });
    // let path = _.$PATH.event.toString() + 1;
    // router.push(path);
  }
  //
  return { handleGoBack, handleEventDetails };
}
