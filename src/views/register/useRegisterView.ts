import { ref } from "vue";
import { useRouter } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
import { zzz } from "@/utils";

export default function useRegisterView() {
  const router = useRouter();
  const _ = useGlobalProperties();
  const submitting = ref(false);

  async function handleSubmit() {
    submitting.value = true;
    await zzz();
    router.push(_.$PATH.verify_email.toString());
  }

  return { handleSubmit, submitting };
}
