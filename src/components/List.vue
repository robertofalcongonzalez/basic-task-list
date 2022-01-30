<script setup lang="ts">
import BaseCheckBox from './Base/BaseCheckBox.vue';
import CustomColorsText from './Base/CustomColorsText.vue';
import { onMounted, Ref, ref } from 'vue';
import EmptyListItem from './Base/EmptyListItem.vue';
import InsertMenu from './InsertMenu.vue';
import { useTasks } from '../composables/useTasks';


const { tasks, inEdition, addTask, editTask, fetchAllTasks } = useTasks()

const list: Ref<string[]> = ref([]);

const showEmptyField = () => {
    inEdition.value = -1;
}
const showAddMenu = () => {
    inEdition.value = -2;
}
const addTaskToList = async (text: string) => {
    if (text) {
        await addTask(text);
        await fetchAllTasks()
    }
    return showEmptyField();
}
const editTaskToList = async (text: string, id: number) => {
    if (text) {
        await editTask(text, id);
        await fetchAllTasks()
    }
    return showEmptyField();
}
onMounted(async () => {
    await fetchAllTasks()

})
const showEditMenu = (index: number) => {
    inEdition.value = index;
}

</script>
<template>
    <ul class="w-full">
        <li>
            <EmptyListItem :tags="[]" v-if="inEdition === -1" @click="showAddMenu"></EmptyListItem>
            <InsertMenu @add-task="addTaskToList" type="add" @cancel="showEmptyField" v-if="inEdition === -2"></InsertMenu>
        </li>
        <li v-for="(listItem, index) in tasks" class="mt-2">
            <BaseCheckBox
                v-if="inEdition !== index"
                v-model:list="list"
                :value="listItem.id"
                :id="listItem.id"
            ></BaseCheckBox>
            <InsertMenu
                v-if="inEdition === index"
                :task="listItem.text"
                type="edit"
                @cancel="showEmptyField"
                @add-task="(text) => editTaskToList(text, listItem.id)"
            ></InsertMenu>
            <CustomColorsText @click="showEditMenu(index)" v-else :text="listItem.text"></CustomColorsText>
        </li>
    </ul>
</template>
<style></style>
