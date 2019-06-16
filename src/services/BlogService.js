import { stringify } from 'qs';
import baseUrl from '../common/baseUrl';
import request from '../common/request';

// 获取博客列表
export async function queryBlogList(params) {
  return request(`${baseUrl}blogs?${stringify(params)}`);
}

// 获取博客信息
export async function queryOneBlog(params) {
  const { blogID } = params;
  return request(`${baseUrl}blogs/${blogID}`);
}

// 获取博客内容
export async function queryOneBlogContent(params) {
  const { blogID } = params;
  return request(`${baseUrl}blog-content/${blogID}`);
}