import { useRouter } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
//
import type { TProps } from "@/types/common";

export default function useAppBar(props: TProps) {
  const router = useRouter();
  const _ = useGlobalProperties();
  //
  function goBack() {
    router.go(-1);
  }
  //
  return { goBack };
}
