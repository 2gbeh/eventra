import { ref } from "vue";
import { useRouter } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
import { zzz } from "@/utils";

export default function useVerifyEmailView() {
  const router = useRouter();
  const _ = useGlobalProperties();
  const submitting = ref(false);

  async function handleSubmit() {
    submitting.value = true;
    await zzz();
    submitting.value = false;
    // router.push(_.$PATH.dashboard.toString());
  }

  return { handleSubmit, submitting };
}
