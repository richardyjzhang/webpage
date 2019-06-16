import { stringify } from 'qs';
import baseUrl from '../common/baseUrl';
import request from '../common/request';

// 获取博客列表
export async function queryBlogList(params) {
  return request(`${baseUrl}blogs?${stringify(params)}`);
}