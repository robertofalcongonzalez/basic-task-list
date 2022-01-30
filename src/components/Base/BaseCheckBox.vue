<script setup lang="ts">import { computed } from 'vue';

const props = defineProps<{
  list: string[];
  id: any;
  value: any;
}>()
const emit = defineEmits<{
  (e: 'update:list', updatedList: string[]): void
}>()

const checked = computed(() => props.list.includes(props.value));

const check = () => {
  const updatedList = [...props.list];
  if (checked.value) {
    updatedList.splice(updatedList.indexOf(props.value), 1);
  } else {
    updatedList.push(props.value);
  }
  emit("update:list", updatedList);
}
</script>

<template>
    <input type="checkbox" :id="id" class="hidden" :checked="checked" />
    <vue-feather @click="check" :type="checked ? 'x-square' : 'square'" class="h-6 text-blue-700 align-middle"></vue-feather>
</template>

<style scoped>
</style>
