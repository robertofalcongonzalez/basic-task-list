<script setup lang="ts">
import { tagIcon, tagTextColors } from '../constants'
defineProps<{
    text: string;
}>()

</script>

<template>
    <vue-feather :title="text" :type="tagIcon.URL" :class="[tagTextColors.URL, 'ml-1.5 mr-1 h-3.5']" v-if="tagIcon.URL"></vue-feather>
    <div :title="text" :class="tagTextColors.URL">Link</div>
</template>

<style scoped>
</style>
