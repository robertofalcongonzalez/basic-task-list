<script setup lang="ts">
import EmptyEditListItem from './Base/EmptyListItem.vue';
import BaseButton from './Base/BaseButton.vue';
import { useRichText } from '../composables/useRichText';
import { computed, onMounted } from 'vue';
import IconButton from './Base/IconButton.vue';

const props = withDefaults(
    defineProps<{
        task?: string;
        type?: string;
    }>(),
    { task: '' }
)
const emit = defineEmits<{
    (e: 'addTask', task: string): void
    (e: 'cancel'): void
}>()
const { tags, inEdition } = useRichText()
const cancelInsertUpdate = () => {
    tags.value = [];
    emit('cancel')
}
const addIcon = computed(() => {
    if (props.task || inEdition.value) {
        if (props.type === 'add') {
            return 'plus'
        }
        else {
            return 'save'
        }
    } else {
        return 'x'
    }
})
onMounted(() => {
    inEdition.value = ''
    tags.value = !!props.task ? props.task.split(' ') : [];
})
const addToTaskList = () => {
    emit('addTask', tags.value.join(' '));
    inEdition.value = ''
}
</script>
<template>
    <div class="w-full border rounded shadow-sm">
        <div class="inline-flex items-center justify-between w-full bg-white">
            <EmptyEditListItem :tags="tags" @send-add="addToTaskList"></EmptyEditListItem>
            <img
                src="./../assets/user.png" alt="avatar"
                class="w-5 h-5 mr-1 rounded-full cursor-pointer justify-self-end"
            />
        </div>
        <div class="p-2 bg-[#FAFBFB]">
            <div class="items-center justify-between hidden lg:flex">
                <div>
                    <BaseButton
                        :disabled="!inEdition"
                        color="bg-secondary"
                        icon="maximize-2"
                        text-color="black"
                        text="Open"
                    ></BaseButton>
                    <BaseButton
                        class="ml-4"
                        color="bg-transparent"
                        icon="calendar"
                        border-color="border-tertiary"
                        :disabled="!inEdition"
                        text-color="text-tertiary"
                        text="Today"
                    ></BaseButton>
                    <BaseButton
                        class="ml-1"
                        color="bg-transparent"
                        icon="unlock"
                        border-color="border-tertiary"
                        :disabled="!inEdition"
                        text-color="text-tertiary"
                        text="Public"
                    ></BaseButton>
                    <BaseButton
                        class="ml-1"
                        color="bg-transparent"
                        icon="sun"
                        border-color="border-tertiary"
                        :disabled="!inEdition"
                        text-color="text-tertiary"
                        text="Highlight"
                    ></BaseButton>
                    <BaseButton
                        class="ml-1"
                        color="bg-transparent"
                        border-color="border-tertiary"
                        icon="disc"
                        :disabled="!inEdition"
                        text-color="text-tertiary"
                        text="Estimation"
                    ></BaseButton>
                </div>
                <div class="justify-self-end">
                    <BaseButton
                        color="bg-secondary"
                        text-color="black"
                        text="Cancel"
                        @click="cancelInsertUpdate"
                    ></BaseButton>
                    <BaseButton
                        class="hidden ml-2 font-semibold lg:inline-flex"
                        color="bg-[#0D55CF]"
                        text-color="text-white"
                        data-cy="save-button"
                        :text="inEdition ? 'Add' : 'Ok'"
                        @click="addToTaskList"
                    ></BaseButton>
                </div>
            </div>
            <div class="lg:hidden contents">
                <div class="flex items-center justify-between">
                    <div>
                        <IconButton
                            :disabled="!inEdition"
                            color="bg-secondary"
                            icon="maximize-2"
                            text-color="black"
                            text="Open"
                        ></IconButton>
                        <IconButton
                            class="ml-4"
                            color="bg-transparent"
                            icon="calendar"
                            border-color="border-tertiary"
                            :disabled="!inEdition"
                            text-color="text-tertiary"
                            text="Today"
                        ></IconButton>
                        <IconButton
                            class="ml-1"
                            color="bg-transparent"
                            icon="unlock"
                            border-color="border-tertiary"
                            :disabled="!inEdition"
                            text-color="text-tertiary"
                            text="Public"
                        ></IconButton>
                        <IconButton
                            class="ml-1"
                            color="bg-transparent"
                            icon="sun"
                            border-color="border-tertiary"
                            :disabled="!inEdition"
                            text-color="text-tertiary"
                            text="Highlight"
                        ></IconButton>
                        <IconButton
                            class="ml-1"
                            color="bg-transparent"
                            border-color="border-tertiary"
                            icon="disc"
                            :disabled="!inEdition"
                            text-color="text-tertiary"
                            text="Estimation"
                        ></IconButton>
                        <IconButton
                            color="bg-transparent"
                            text-color="black"
                            icon="trash-2"
                            @click="cancelInsertUpdate"
                        ></IconButton>
                    </div>
                    <IconButton
                        class="ml-2 font-semibold justify-self-end"
                        color="bg-[#0D55CF]"
                        :icon="addIcon"
                        text-color="text-white"
                        data-cy="save-button-sm"
                        @click="addToTaskList"
                    ></IconButton>
                </div>
            </div>
        </div>
    </div>
</template>
<style></style>
