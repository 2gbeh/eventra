import { ref } from "vue";
import { useRouter } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
import { zzz } from "@/utils";

export default function useForgotPasswordView() {
  const router = useRouter();
  const _ = useGlobalProperties();
  const submitting = ref(false);

  async function handleSubmit() {
    submitting.value = true;
    await zzz();
    router.push(_.$PATH.reset_password.toString());
  }

  return { handleSubmit, submitting };
}
