<script setup lang="ts">
import { ref, reactive } from "vue";
import BiImageFill from '~icons/bi/image-fill';
import useFileSelector from '@/hooks/useFileSelector';
// 
const props = defineProps<{
  submitting: boolean,
}>()

const { file, fileInputRef, handleFileInput, resetFileInput } = useFileSelector(props.submitting)
</script>

<template>
  <section class="flex-center-center">
    <figure v-if="file.url" class="image-fill">
      <img src="/social-preview.png" alt="Thumbnail" />
      <figcaption title="Cancel" @click="resetFileInput"><i>&times;</i></figcaption>
    </figure>
    <div v-else>
      <!--  -->
      <input ref="fileInputRef" type="file" name="thumbnail" id="thumbnail" accept="image/*"
        @change="handleFileInput" />
      <!--  -->
      <i>
        <BiImageFill @click="handleFileInput" />
      </i>
    </div>
  </section>
</template>

<style scoped src="./AddEventImage.scss"></style>