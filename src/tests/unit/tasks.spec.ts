import { useTasks } from "../../composables/useTasks"
import { mockElemToAdd, mockTasks } from "../mock/tasks";
import MockAdapter from "axios-mock-adapter";
import { axiosInstance } from "../../services/axios-service";
const { addTask, editTask, fetchAllTasks, tasks } = useTasks()

describe('Rich text functionalities', () => {
    let mock: MockAdapter;

    beforeAll(() => {
        mock = new MockAdapter(axiosInstance);
    });

    afterEach(() => {
        mock.reset();
    });

    it('should return all tasks', async () => {
        mock.onGet('https://basic-tasks-list.herokuapp.com/tasks/').reply(200, mockTasks);
        await fetchAllTasks();

        expect(mock.history.get[0].url).toBe('/tasks/');
        setTimeout(() => expect(tasks.value).toStrictEqual(mockTasks), 500)

    })
    it('should add a task', async () => {
        mock.onPost('https://basic-tasks-list.herokuapp.com/tasks/').reply(200);
        await addTask(mockElemToAdd)
        expect(mock.history.post[0].url).toBe('/tasks/');
    })
    it('should edit a task', async () => {
        mock.onPatch('https://basic-tasks-list.herokuapp.com/tasks/1').reply(200);
        await editTask(mockElemToAdd, 1)
        expect(mock.history.patch[0].url).toBe('/tasks/1');
    })
})