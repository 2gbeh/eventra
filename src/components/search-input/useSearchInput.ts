import { ref } from "vue";

export default function useSearchInput() {
  const showSearch = ref(true);

  const toggleSearch = () => (showSearch.value = !showSearch.value);

  return { showSearch, toggleSearch };
}
