<script setup lang="ts">
const emit = defineEmits<{
    (e: 'click'): void
}>()
defineProps<{
    icon?: string;
    text?: string;
    disabled?: boolean;
    textColor?: string;
    color?: string;
    borderColor?: string;
}>()
</script>
<template>
    <button
        @click="emit('click')"
        :disabled="disabled"
        :class="[color, textColor, borderColor, !disabled ? ' hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500' : '',
            'inline-flex justify-center border  px-4 py-2 text-sm font-medium bg-secondary rounded-md',
        ]"
    >
        <vue-feather :type="icon" v-if="icon" class="h-5 mr-3.5"></vue-feather>
        <span>{{ text }}</span>
    </button>
</template>
<style></style>