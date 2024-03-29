import { ref, reactive } from "vue";

export type TFile = {
  obj: null | Blob | MediaSource;
  url: null | string;
};

export const mockFileObject = {
  name: "social-preview.png",
  lastModified: 1711577060451,
  lastModifiedDate:
    "Wed Mar 27 2024 23:04: 20 GMT +0100(West Africa Standard Time)",
  webkitRelativePath: "",
  size: 85802,
};

export default function useFileSelector(isDisabled = false) {
  const file = reactive<TFile>({
    obj: null,
    url: null,
  });
  const fileInputRef = ref<HTMLInputElement | null>(null);
  //
  function handleFileInput(ev: Event) {
    if (!isDisabled) {
      switch (ev.type) {
        case "click":
          fileInputRef.value?.click();
          break;
        case "change":
          if (fileInputRef.value?.files) {
            file.obj = fileInputRef.value.files[0];
            file.url = URL.createObjectURL(file.obj);
            // console.log(file.obj);
          }
          break;
        default:
          console.log("🚀 ~ fileInputRef:", fileInputRef.value);
      }
    }
  }

  function resetFileInput() {
    file.obj = null;
    file.url = null;
  }
  //
  return { file, fileInputRef, handleFileInput, resetFileInput };
}
