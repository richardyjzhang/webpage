import React from 'react';
import { SubscriptionAPI, connect } from 'dva';

class BlogPage<P = {}, S = {}> extends React.Component<
  P & SubscriptionAPI, S
  > {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'BlogModel/fetchOneBlogInfo',
      payload: 1,
    });
  }

  render() {
    return <div>好啊好啊</div>
  }
}

// export default connect(({ BlogModel }) => (
//   { BlogModel }))(BlogPage);
