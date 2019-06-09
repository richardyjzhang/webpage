import React from 'react';
import Header from '../../component/Header';
import styles from './index.css';

class HomePage extends React.Component {

  render() {
    return (
      <div className={styles.homePageRoot}>
        <Header />
        <div className={styles.imgContainer}>
          <img className={styles.bgImage} src='background.jpg' alt='' />
        </div>
      </div>
    );
  }
}

export default HomePage;