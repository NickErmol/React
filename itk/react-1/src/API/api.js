import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'c07e0a16-2a1e-4352-bcf3-70767c0c66bc'
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },
    follow(userId ) {
        return instance.post(`follow/${userId}`, {})
        .then(response => response.data)
    },
    unFollow(userId = 2) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    },
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
        .then(response => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
        .then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
        .then(response => response.data);
    }
}

export const authAPI = {
    getMyData() {
        return instance.get(`auth/me`)
        .then(response => response.data);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}