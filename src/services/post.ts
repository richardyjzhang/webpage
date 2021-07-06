import request from "../utils/request";

export const _fetchPosts = () => {
    return request.request({
        method: 'GET',
        url: '/posts',
    });
}