import React from 'react';
import styles from './index.css';

class Header extends React.Component {

  constructor() {
    super();
    this.nav = [
      { text: 'HOME', href: '/' },
      { text: 'BLOG', href: '/' },
      { text: 'ABOUT', href: '/' },
    ];
  }

  toLink = nav => {
    console.log(nav);
  };

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.navBar}>
          {this.nav.map((nav, index) => (
            <button
              className={styles.navButton}
              key={index}
              onClick={this.toLink.bind(this, nav)}
            >
              {nav.text}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Header;