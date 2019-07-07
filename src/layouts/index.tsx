import React from 'react';

import Header from './component/Header';
import styles from './index.css';

class BasicLayout extends React.Component {
  render() {
    return (
      <div className={styles.homePageRoot}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default BasicLayout;
