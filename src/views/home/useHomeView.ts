import { ref } from "vue";
import { useRouter } from "vue-router";
import useGlobalProperties from "@/hooks/useGlobalProperties";
import { zzz } from "@/utils";

// import fakerHelper from "@/lib/faker-js/main";
// fakerHelper.log(fakerHelper.getEvents);

export default function useHomeView() {
  const router = useRouter();
  const _ = useGlobalProperties();
  const showSearch = ref(true);
  const showOffcanvas = ref(false);
  const submitting = ref(false);

  async function toggleSearch() {
    showSearch.value = !showSearch.value;
  }

  async function toggleOffcanvas() {
    showOffcanvas.value = !showOffcanvas.value;
  }

  async function handleSubmit() {
    submitting.value = true;
    await zzz();
    submitting.value = false;
    toggleOffcanvas()
  }

  return { showSearch, toggleSearch, showOffcanvas, toggleOffcanvas, handleSubmit, submitting };
}
