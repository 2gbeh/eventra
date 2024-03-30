import { ref } from "vue";

export default function useSearchInput() {
  const showSearch = ref(true);

  async function toggleSearch() {
    showSearch.value = !showSearch.value;
  }

  return { showSearch, toggleSearch };
}
