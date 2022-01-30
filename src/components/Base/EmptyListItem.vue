<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRichText } from '../../composables/useRichText';
import { tagTextColors } from '../constants'
import { defineType } from '../utilities'

defineProps<{ tags: string[] }>()
const emit = defineEmits<{
  (e: 'click'): void
  (e: 'sendAdd'): void
  (e: 'update:value', value: string): void
}>()
const inpt = ref<HTMLInputElement | null>(null)
const { addNewItem, deleteElement, inEdition } = useRichText()
const focusInput = () => {
  inpt?.value?.focus();
}
onMounted(() => {

  focusInput();
})
const emitClick = () => {
  emit('click')
}
const leftEdition = () => {
  inEdition.value += !!inEdition.value && inEdition.value.trim() ? ' ' : ''
  addNewItem()
}
const enterPressed = () => {
  leftEdition()
  emit('sendAdd');
}


</script>

<template>
  <div class="flex items-center h-10 px-0.5" data-cy="empty-container" @click="emitClick">
    <vue-feather type="plus-square" class="static w-5 h-5 overflow-visible text-blue-700"></vue-feather>
    <span
      v-for="tag in tags"
      @click="focusInput"
      :class="[tagTextColors[defineType(tag)], 'ml-1 h-5 p-0 mb-1 outline-none ring-transparent']"
    >{{ tag }}</span>
    <input
      type="text"
      ref="inpt"
      v-model="inEdition"
      @input="addNewItem"
      @focusout="leftEdition"
      @keyup.enter="enterPressed"
      :placeholder="tags.length ? '' : 'Type to add new task'"
      @keydown.delete="deleteElement"
      class="w-full h-5 p-0 ml-1 outline-none ring-transparent"
    />
  </div>
</template>

<style scoped>
input,
span {
  font-family: Roboto,sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}
</style>
