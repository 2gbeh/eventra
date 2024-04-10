<script setup lang="">
import Button from '@/components/button/Button.vue'
import TablerChevronLeft from '~icons/tabler/chevron-left';
import useNotFound from "./useNotFound"

const {path, goBack} = useNotFound();
</script>

<template>
  <main class="flex-centered gap-2 bg-white">
    <!--  -->
    <Logo size="80" />
    <h1>Not Found</h1>
    <p>It appears the requested resource <a>{{ path }}</a> does not exist or has been moved temporarily.</p>
    <!--  -->
    <div class="w-[150px]">
      <Button :action="goBack" class="flex-center-center mt-5">
        <TablerChevronLeft class="mr-2 text-lg" />
        Go Back
      </Button>
    </div>
  </main>
</template>

<style scoped src="./NotFound.scss"></style>