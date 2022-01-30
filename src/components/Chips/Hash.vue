<script setup lang="ts">
import { tagIcon, tagTextColors } from '../constants'
defineProps<{
    text: string;
}>()

</script>

<template>
    <vue-feather :title="text" :type="tagIcon.hash" :class="[tagTextColors.hash, 'ml-1.5 mr-1 h-3.5']" v-if="tagIcon.hash"></vue-feather>
    <div :title="text" :class="tagTextColors.hash">{{ text.substring(1) }}</div>
</template>

<style scoped>
</style>
