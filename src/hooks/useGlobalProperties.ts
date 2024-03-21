import { getCurrentInstance } from "vue";

export default function useGlobalProperties() {
  const vm = getCurrentInstance();
  return vm!.appContext.config.globalProperties;
}
