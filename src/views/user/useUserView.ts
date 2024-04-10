import { computed, ref } from "vue";
import useNavigator from "@/hooks/useNavigator";
import { zzz } from "@/utils";
import { formData } from "../profile/PROFILE_VIEW";

export default function useUserView() {
  const nav = useNavigator();
  //
  const submitting = ref(false);
  const updating = ref(false);
  const showEditModal = ref(false);
  const editFormType = ref(0);
  const editFormHeader = computed(() => {
    return ["Edit Name", "Edit Email", "Edit Password"][editFormType.value];
  });
  //
  function toggleShowEdit(type = -1) {
    if (type > -1) editFormType.value = type;
    showEditModal.value = !showEditModal.value;
  }
  async function handleUpdate() {
    updating.value = true;
    await zzz();
    updating.value = false;
    toggleShowEdit(-1);
  }
  async function handleSubmit() {
    submitting.value = true;
    await zzz();
    submitting.value = false;
    nav(["login"]);
  }
  //
  return {
    formData,
    submitting,
    updating,
    showEditModal,
    editFormType,
    editFormHeader,
    toggleShowEdit,
    handleSubmit,
    handleUpdate,
  };
}
