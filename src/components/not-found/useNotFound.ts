import { useRoute, useRouter } from "vue-router";

export default function useNotFound() {
  const route = useRoute();
  const router = useRouter();

  return { path: route.path, goBack: () => router.go(-1) };
}
