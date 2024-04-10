import { ref, reactive } from "vue";
import { zzz } from "@/utils";
import events from "@/data/fake-events";

// import fakerHelper from "@/lib/faker-js/main";
// fakerHelper.log(fakerHelper.getCollection);

export default function useHomeView() {
  const data = reactive(events);
  const showOffcanvas = ref(false);
  const submitting = ref(false);

  const toggleOffcanvas = () => (showOffcanvas.value = !showOffcanvas.value);

  async function handleSubmit() {
    submitting.value = true;
    await zzz();
    submitting.value = false;
    toggleOffcanvas();
  }

  return { data, showOffcanvas, toggleOffcanvas, handleSubmit, submitting };
}
