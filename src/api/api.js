import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY" : "b9dba145-8d71-4d0f-9373-58dec300c91d"
    }
});

export const usersAPI = {
    getUsers (currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
}
export const authAPI = {
    auth(){
        return instance.get('auth/me')
            .then(response => response.data)
    }
}
export const profileAPI = {
    profileData (userId) {
        return instance.get('profile/' + userId)
            .then(response => response.data)
    }
}
