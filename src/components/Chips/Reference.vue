<script setup lang="ts">
import { tagTextColors } from '../constants'
defineProps<{
    text: string;
}>()

</script>

<template>
    <img :title="text" alt="avatar" src="../../assets/user.png" class="w-5 h-5 mr-1 rounded-full" />
    <div :title="text" :class="tagTextColors.reference">{{ text.substring(1) }}</div>
</template>

<style scoped>
</style>
