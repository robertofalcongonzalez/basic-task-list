<script setup lang="ts">
import { computed } from 'vue';
import { defineType, capitalize } from '../utilities';
import { tagBgColors } from '../constants';

const props = defineProps<{
  text: string;
}>()
const emit = defineEmits<{
  (e: 'chipClick', text: string): void;
}>()
const type = defineType(props.text);
const chip = type !== 'plane-text' ? (await import(`../Chips/${capitalize(type as string)}.vue`)).default : ''
const getChip = computed(() => chip)
</script>

<template>
  <div :class="['h-6']">
    <div
      @click="emit('chipClick', text)"
      v-if="type !== 'plane-text'"
      :class="['rounded-full pl-0.5 pr-2 shadow-sm inline-flex items-center', tagBgColors[type]]"
    >
      <component :is="getChip" :text="text"></component>
    </div>
    <div v-else>{{ text }}</div>
  </div>
</template>

<style scoped>
</style>