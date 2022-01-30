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
    >
        <vue-feather :type="icon" v-if="icon"
         :class="[color, textColor, borderColor, !disabled ? ' hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500' : '',
            'inline-flex justify-center px-4 py-2 text-sm font-medium bg-secondary rounded-md',
        ]"></vue-feather>
        
    </button>
</template>
<style></style>