import {
  queryBlogList,
  queryOneBlog,
  queryOneBlogContent,
} from '../services/BlogService';

export default {
  namespace: 'BlogModel',
  state: {
    blogListData: [],
    blogInfoData: {},
    blogContentData: {},
  },
  effects: {
    *fetchBlogList({ payload }, { call, put }) {
      const response = yield call(queryBlogList, payload);
      yield put({
        type: 'blogList',
        payload: response,
      });
    },
    *fetchOneBlogInfo({ payload }, { call, put }) {
      const response = yield call(queryOneBlog, payload);
      yield put({
        type: 'blogInfo',
        payload: response,
      });
    },
    *fetchOneBlogContent({ payload }, { call, put }) {
      const response = yield call(queryOneBlogContent, payload);
      console.log(response);
      yield put({
        type: 'blogContent',
        payload: response,
      });
    },
  },
  reducers: {
    blogList(state, action) {
      return {
        ...state,
        blogListData: [...action.payload],
      };
    },
    blogInfo(state, action) {
      return {
        ...state,
        blogInfoData: action.payload,
      };
    },
    blogContent(state, action) {
      return {
        ...state,
        blogContentData: action.payload,
      };
    },
  },
};