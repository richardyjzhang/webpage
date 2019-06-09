import React from 'react';
import styles from './index.css';

class HomePage extends React.Component {

  render() {
    return (
      <div className={styles.imgContainer}>
        <img className={styles.bgImage} src='background.jpg' alt='' />
      </div>
    );
  }
}

export default HomePage;