import React from 'react';
import { List } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

class BlogList extends React.Component {

  // 绘制分隔所需要到实线
  renderSolidLine = () => <hr className={styles.solidLine} />;

  // 绘制分隔所需要到虚线
  renderDashedLine = () => <hr className={styles.dashedLine} />;

  // 列表中一个博客的内容
  renderItem = (blogItem) => {
    return (
      <List.Item className={styles.blogItemContainer}>
        {this.renderSolidLine()}
        {this.renderDashedLine()}
        <div>
          <h4 level={4} className={styles.blogTitle}>{blogItem.title}</h4>
          <span type="secondary" className={styles.blogDate}>{blogItem.date}</span>
          <br />
        </div>
        {this.renderDashedLine()}
        {this.renderSolidLine()}
      </List.Item >
    );
  };

  // 分页配置
  makePaginationConfig = () => {
    const { BlogModel: { blogList } } = this.props;
    return ({
      size: "small",
      total: blogList.length,
      defaultPageSize: 5,
    });
  };

  render() {
    const { BlogModel: { blogList } } = this.props;
    return (
      <List
        className={styles.blogListContainer}
        split={false}
        dataSource={blogList}
        renderItem={this.renderItem}
      />
    );
  }
}

export default connect(({ BlogModel }) => ({ BlogModel }))(BlogList);