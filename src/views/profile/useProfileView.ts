import { ref } from "vue";
import useNavigator from "@/hooks/useNavigator";
import { zzz } from "@/utils";

export default function useProfileView() {
  const nav = useNavigator();
  //
  const showEditModal = ref(false);
  const editFormType = ref(0);
  const submitting = ref(false);
  //
  const toggleShowEdit = (type: number = -1) => {
    if (type > -1) editFormType.value = type;
    showEditModal.value = !showEditModal.value;
  };

  const handleSubmit = async () => {
    submitting.value = true;
    await zzz();
    submitting.value = false;
    nav(['login']);
  };
  //
  return {
    showEditModal,
    editFormType,
    submitting,
    toggleShowEdit,
    handleSubmit,
  };
}
