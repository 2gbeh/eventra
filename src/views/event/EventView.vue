<script setup lang="">
import EditIcon from '~icons/akar-icons/edit';
import TrashIcon from '~icons/ri/delete-back-2-fill';
import CancelIcon from '~icons/flat-color-icons/cancel';
import FolderIcon from '~icons/fluent/delete-12-filled';
import Button from '@/components/button/Button.vue'
import LoadingAlt from '@/components/loaders/LoadingAlt.vue'
import BottomSheet from '@/components/BottomSheet.vue'
import EditEvent from '@/components/edit-event/EditEvent.vue'
import Dialog from '@/components/dialog/Dialog.vue'
import { wrap } from "@/utils";
// Kw
import AboutEventFigure from '@/components/about-event/AboutEventFigure.vue'
import AboutEventMeta from '@/components/about-event/AboutEventMeta.vue'
import useEventView from "./useEventView";

const props = defineProps({
  eventId: String,
})

const { 
  event, 
  attendance, 
  //
  showEditModal,
  toggleEditModal,
  handleEdit,
  editing,
  // 
  showDeleteModal,
  toggleDeleteModal,
  handleDelete,
  deleting,
} = useEventView(props)
</script>

<template>
  <AppBar stack="About Event" />
  <SafeAreaView>
    <!--  -->
    <AboutEventFigure :thumbnail="event.f_thumbnail" :title="event.title" :attendance="attendance">
      <EditIcon />
    </AboutEventFigure>

    <!--  -->
    <article class="container">
      <!-- {{ event.summary }} -->
      {{ wrap(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti nihil soluta sit molestias tenetur
      reprehenderit doloribus quos modi accusamus, officia libero repellendus temporibus dolorem fugiat rerum aut!
      Perspiciatis, natus aspernatur.`, 180) }}
    </article>

    <!--  -->
    <section class="container">
      <AboutEventMeta :date="event.f_date" :time="event.f_time" :venue="event.venue" />
      <!--  -->
      <Button :action="toggleDeleteModal" class="flex-center-center" alt>
        <i class="mr-2">
          <TrashIcon />
        </i>
        Delete
      </Button>
    </section>
    
    <!--  -->
    <BottomSheet v-if="showEditModal" :on-close="toggleEditModal">
      <EditEvent :handle-submit="handleEdit" :submitting="editing" />
    </BottomSheet>
    
    <!--  -->
    <Dialog :show="showDeleteModal" :on-close="toggleDeleteModal" :handle-confirm="handleDelete" :confirming="deleting">
      <FolderIcon />
    </Dialog>
  </SafeAreaView>
</template>

<style scoped src="./EventView.scss"></style>
