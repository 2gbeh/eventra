import { useRouter, type RouteParamsRaw } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
//
export default function useNavigator(paramValue?: string | number) {
  const router = useRouter();
  const _ = useGlobalProperties();
  //
  function nav(
    name: number | string,
    params?: string | RouteParamsRaw,
    asQuery: boolean = false,
  ) {
    switch (typeof name) {
      case "number":
        // -1 (go back)
        router.go(name);
        break;
      default:
        if (params) {
          if (typeof params === "object") {
            // /users/1 OR /users?id=1
            // router.push({ name: "users", params | query: { id: 1 } });
            asQuery
              ? router.push({ name, query: params })
              : router.push({ name, params });
          } else {
            asQuery
              ? router.push({ name, query: { [params]: paramValue } })
              : router.push({ name, params: { [params]: paramValue } });
          }
        } else {
          // /dashboard
          // router.push(_.$PATH.dashboard.toString());
          router.push(name);
        }
    }
  }
  //
  return nav;
}
