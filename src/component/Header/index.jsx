import React from 'react';
import router from 'umi/router';
import styles from './index.css';

class Header extends React.Component {

  constructor() {
    super();
    this.nav = [
      { text: 'HOME', href: '/' },
      { text: 'BLOG', href: '/CatalogPage' },
      { text: 'ABOUT', href: '/' },
    ];
  }

  toLink = nav => {
    router.push(nav.href);
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