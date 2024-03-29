import { ref } from "vue";
import { useRouter } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
import { zzz } from "@/utils";

// import fakerHelper from "@/lib/faker-js/main";
// fakerHelper.log(fakerHelper.getEvents);

export default function useHomeView() {
  const router = useRouter();
  const _ = useGlobalProperties();
  const showOffcanvas = ref(false);
  const submitting = ref(false);

  async function toggleOffcanvas() {
    showOffcanvas.value = !showOffcanvas.value;
  }

  async function handleSubmit() {
    submitting.value = true;
    await zzz();
    submitting.value = false;
    toggleOffcanvas()
  }

  return { showOffcanvas, toggleOffcanvas, handleSubmit, submitting };
}
