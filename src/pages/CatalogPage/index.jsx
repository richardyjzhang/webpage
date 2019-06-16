import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'dva';

import BlogList from '../../component/BlogList';
import BlogDetail from '../../component/BlogDetail';

import styles from './index.css';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBlogID: 0,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'BlogModel/fetchBlogList',
      payload: {},
    });
  }

  componentWillReceiveProps(nextProps) {
    const { BlogModel: { blogListData } } = this.props;
    const { BlogModel: { blogListData: newBlogListData } } = nextProps;
    if (blogListData.length === newBlogListData.length) {
      return
    }
    if (newBlogListData.length <= 0) {
      return
    }
    this.setState({
      selectedBlogID: newBlogListData[0].id,
    });
  }

  render() {
    const { selectedBlogID } = this.state;

    return (
      <div className={styles.mainContainer}>
        <Row>
          <Col span={8}>
            <BlogList />
          </Col>
          <Col span={16}>
            <BlogDetail blogID={selectedBlogID} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(({ BlogModel }) => (
  { BlogModel }))(CatalogPage);