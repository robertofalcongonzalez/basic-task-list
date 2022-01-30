import { computed, ref } from "vue";
import { getAll, insert, update } from "../services/TasksRepository";

const state = {
    tasks: ref<Record<string, any>[]>([]),
    inEdition: ref(-1)
}

export function useTasks() {
    const tasks = computed(() => state.tasks.value)
    const inEdition = computed({ get: () => state.inEdition.value, set: (val) => state.inEdition.value = val })
    const fetchAllTasks = async () => {
        const fetchedTasks = await getAll();        
        state.tasks.value = [];
        setTimeout(()=> state.tasks.value.push(...fetchedTasks.data.tasks), 400);
    }
    const addTask = async (text: string) => {
        return insert(text);
    }
    const editTask = async (text: string, id: number) => {
        return update(text, id);
    }
    
    return {
        tasks,
        inEdition,
        addTask,
        editTask,
        fetchAllTasks
    }
}