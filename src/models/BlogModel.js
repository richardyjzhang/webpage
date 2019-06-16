import {
  queryBlogList,
} from '../services/BlogService';

export default {
  namespace: 'BlogModel',
  state: {
    blogListData: [],
  },
  effects: {
    *fetchBlogList({ payload }, { call, put }) {
      const response = yield call(queryBlogList, payload);
      yield put({
        type: 'blogList',
        payload: response,
      });
    }
  },
  reducers: {
    blogList(state, action) {
      return {
        ...state,
        blogListData: [...action.payload],
      };
    }
  },
};