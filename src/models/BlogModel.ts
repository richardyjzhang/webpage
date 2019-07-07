import { Model } from 'dva';

import {
  queryBlogList,
  queryOneBlog,
} from '../services/BlogService';

interface BlogModelState {
  blogListData: BlogInfo[];
  blogInfoData: BlogInfo;
}

export default {
  namespace: 'BlogModel',
  state: {
    blogListData: [],
    blogInfoData: {},
  },
  effects: {
    // *fetchBlogList({ }, { call, put }) {
    //   const response: BlogInfo[] = yield call(queryBlogList);
    //   yield put({
    //     type: 'blogList',
    //     payload: <BlogInfo[]>response,
    //   });
    // },
    // *fetchOneBlogInfo({ blogID }: { type: string, blogID: number }, { call, put }) {
    //   const response: BlogInfo = yield call(queryOneBlog, blogID);
    //   yield put({
    //     type: 'blogInfo',
    //     payload: <BlogInfo>response,
    //   });
    // },
  },
  reducers: {
    // blogList(state: BlogModelState, payload: BlogInfo[]): BlogModelState {
    //   return {
    //     ...state,
    //     blogListData: [...payload],
    //   };
    // },
    // blogInfo(state: BlogModelState, { payload }: { type: string, payload: BlogInfo }): BlogModelState {
    //   return {
    //     ...state,
    //     blogInfoData: payload,
    //   };
    // },
  },
} as Model;
