import request from "../utils/request";

export const _fetchPosts = () => {
  return request.request({
    method: "GET",
    url: "/posts",
  });
};

export const _fetchOnePostMD = (postId: number) => {
  return request.request({
    method: "GET",
    url: `/post-content/${postId}`,
  });
};
