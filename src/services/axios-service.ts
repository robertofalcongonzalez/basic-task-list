import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://basic-tasks-list.herokuapp.com',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
})