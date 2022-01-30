import { computed, ref } from "vue";

const state = {
    tags: ref<string[]>([]),
    inEdition: ref('')
}

export function useRichText() {
    const tags = computed({get: () => state.tags.value, set: (val) => state.tags.value = val})
    const inEdition = computed({ get: () => state.inEdition.value, set: (val) => state.inEdition.value = val })
    const addNewItem = () => {
        if (inEdition.value.endsWith(' ') && inEdition.value.trim()) {
            state.tags.value.push(inEdition.value.trim())
            state.inEdition.value = ''
        }
    }
    const deleteElement = ($event: any) => {
        if (($event.target.value as string) === '') {
            state.inEdition.value = state.tags.value[state.tags.value.length - 1] || '';
            state.tags.value?.pop();
        }
    }
    return {
        addNewItem,
        deleteElement,
        tags,
        inEdition

    }
}