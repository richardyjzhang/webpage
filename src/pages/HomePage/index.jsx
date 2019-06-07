import React from 'react';
import Header from '../../component/Header';
import styles from './index.css';

class HomePage extends React.Component {

  render() {
    return (
      <div className={styles.homePageRoot}>
        <Header />
        <img className={styles.bgImage} src='background.jpg' alt='' />
      </div>
    );
  }
}

export default HomePage;