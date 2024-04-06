import { computed, ref } from "vue";
import useNavigator from "@/hooks/useNavigator";
import { zzz } from "@/utils";

export default function useProfileView() {
  const nav = useNavigator();
  //
  const formData = [
    {
      label: "Name",
      value: "Emmanuel Tugbeh",
      isVerified: false,
      canEdit: true,
    },
    {
      label: "Email",
      value: "etugbeh@outlook.com",
      isVerified: true,
      canEdit: true,
    },
    {
      label: "Password",
      value: "**** ****",
      isVerified: false,
      canEdit: true,
    },
    {
      label: "Role",
      value: "WEBMASTER",
      isVerified: false,
      canEdit: false,
    },
    {
      label: "Joined",
      value: "15/09/1992",
      isVerified: false,
      canEdit: false,
    },
  ];
  const submitting = ref(false);
  const showEditModal = ref(false);
  const editFormType = ref(0);
  const editFormHeader = computed(() => {
    return ["Edit Name", "Edit Email", "Edit Password"][editFormType.value];
  });
  //
  const toggleShowEdit = (type = -1) => {
    if (type > -1) editFormType.value = type;
    showEditModal.value = !showEditModal.value;
  };
  const handleSubmit = async () => {
    submitting.value = true;
    await zzz();
    submitting.value = false;
    nav(["login"]);
  };
  //
  return {
    formData,
    submitting,
    showEditModal,
    editFormType,
    editFormHeader,
    toggleShowEdit,
    handleSubmit,
  };
}
