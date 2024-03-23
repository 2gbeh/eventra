import { useRoute, useRouter } from "vue-router";

export default function useNotFound() {
  const route = useRoute();
  const router = useRouter();

  return { path: route.path, handleGoBack: () => router.go(-1) };
}
