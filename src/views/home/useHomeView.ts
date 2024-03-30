import { ref } from "vue";
import { zzz } from "@/utils";

// import fakerHelper from "@/lib/faker-js/main";
// fakerHelper.log(fakerHelper.getEvents);

export default function useHomeView() {
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
