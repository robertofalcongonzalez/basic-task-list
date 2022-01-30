<script setup lang="ts">
import { tagIcon, tagTextColors } from '../constants'
defineProps<{
    text: string;
}>()

</script>

<template>
    <vue-feather :title="text" :type="tagIcon.email" :class="[tagTextColors.email, 'ml-1.5 mr-1 h-3.5']" v-if="tagIcon.email"></vue-feather>
    <div :title="text" :class="tagTextColors.email">Mail</div>
</template>

<style scoped>
</style>
