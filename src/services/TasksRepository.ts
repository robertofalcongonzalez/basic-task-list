import { axiosInstance } from "./axios-service";

const route = '/tasks/';

async function getAll() {
    return await axiosInstance.get(route);
}
async function insert(task: string) {
    return await axiosInstance.post(route, { text: task });
}
async function update(task: string, id: string | number) {
    return await axiosInstance.patch(route + id, { text: task });
}

// async function getById(id: string | number) {
//     return await axiosInstance.get(route, { params: { id } });
// }

// async function deleteById(id: string | number) {
//     return await axiosInstance.delete(route, { params: { id } });
// }
export {
    getAll,
    insert,
    update
    // getById,
    // deleteById,
}