<script setup lang="ts">
import BaseChip from './BaseChip.vue';
const props = defineProps<{
    text: string;
}>()
const splittedText = props.text.split(' ');
const log = (text: string)=>{
    console.log(text);    
}
</script>

<template>
    <div class="inline-flex items-center h-6">
        <Suspense>
            <BaseChip @chip-click="log"
                v-for="(textTag, index) in splittedText"
                class="ml-2"
                :key="index"
                :text="textTag"
            ></BaseChip>
        </Suspense>
    </div>
</template>

<style scoped >
</style>
