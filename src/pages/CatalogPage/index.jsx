import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'dva';

import BlogList from '../../component/BlogList';
import BlogDetail from '../../component/BlogDetail';

import styles from './index.css';

class CatalogPage extends React.Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'BlogModel/fetchBlogList',
      payload: {},
    });
  }

  render() {

    return (
      <div className={styles.mainContainer}>
        <Row>
          <Col span={8}>
            <BlogList />
          </Col>
          <Col span={16}>
            <BlogDetail />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(({ BlogModel }) => (
  { BlogModel }))(CatalogPage);