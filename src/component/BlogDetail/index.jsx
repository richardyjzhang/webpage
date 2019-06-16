import React from 'react';
import { connect } from 'dva';
import ReactMarkdown from 'react-markdown';
import styles from './index.css';

class BlogDetail extends React.Component {

  componentWillReceiveProps(nextProps) {
    const { dispatch, blogID } = this.props;
    const { blogID: newBlogID } = nextProps;
    if (blogID !== newBlogID && newBlogID !== 0) {
      dispatch({
        type: 'BlogModel/fetchOneBlogInfo',
        payload: {
          blogID: newBlogID,
        },
      });
      dispatch({
        type: 'BlogModel/fetchOneBlogContent',
        payload: {
          blogID: newBlogID,
        },
      });
    }
  }

  render() {
    const { blogID,
      BlogModel: { blogInfoData, blogContentData } } = this.props;
    const { content } = blogContentData;

    if (0 === blogID) {
      return null;
    }

    return (
      <div className={styles.blogContainer}>
        <h2>{blogInfoData.title}</h2>
        <span>{blogInfoData.date}</span>
        <div className={styles.mdContainer}>
          <ReactMarkdown source={content} />
        </div>
      </div>
    );
  }
}

export default connect(({ BlogModel }) => ({ BlogModel }))(BlogDetail);