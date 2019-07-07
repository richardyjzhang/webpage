import { stringify } from 'qs';
import baseUrl from '../common/baseUrl';
import request from '../common/request';

// 获取博客列表
export async function queryBlogList(params: Object) {
  return request(`${baseUrl}blogs?${stringify(params)}`);
}

// 获取博客信息
export async function queryOneBlog(blogID: number) {
  return request(`${baseUrl}blogs/${blogID}`);
}

// 获取博客内容
export async function queryOneBlogContent(blogID: number) {
  return request(`${baseUrl}blog-content/${blogID}`);
}
