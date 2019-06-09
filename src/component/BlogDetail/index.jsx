import React from 'react';
import { connect } from 'dva';
import ReactMarkdown from 'react-markdown';
import styles from './index.css';

class BlogDetail extends React.Component {

  render() {
    const markdown = `# This is a header`;
    return (
      <div className={styles.blogContainer}>
        <h2>文章标题</h2>
        <span>日期</span>
        <div className={styles.mdContainer}>
          <ReactMarkdown source={markdown} />
        </div>
      </div>
    );
  }
}

export default connect(({ BlogModel }) => ({ BlogModel }))(BlogDetail);