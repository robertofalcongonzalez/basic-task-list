import { regExp } from "./constants"
import { TagConst } from "./types"

export const defineType = (tag: string): keyof TagConst => {
    if (tag.startsWith('#')) {
        return 'hash'
    }
    if (tag.startsWith('@')) {
        return 'reference'
    }
    if (tag.match(regExp.email)) {
        return 'email'
    }
    if (tag.match(regExp.URL)) {
        return 'URL'
    }
    return 'plane-text';
}

export const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

export const findTaskById = (allTasks: Record<string, any>[], id: string) => {
    return !!allTasks.find((iterTask) => iterTask.id === id)
}
