import React from 'react';
import router from 'umi/router';
import styles from './index.css';

interface NavItem {
  text: string;
  href: string;
}
interface IButtonProps {
  index: number;
  navItem: NavItem;
}

class HeaderButton extends React.Component<IButtonProps> {

  onClick() {
    router.push(this.props.navItem.href);
  }

  render() {
    return (
      <button
        className={styles.navButton}
        key={this.props.index}
        onClick={this.onClick}
      >
        {this.props.navItem.text}
      </ button>
    );
  }
}

class Header extends React.PureComponent {

  private static navItems: NavItem[] = [
    { text: 'HOME', href: '/' },
    { text: 'BLOG', href: '/BlogPage' },
    { text: 'ABOUT', href: '/' },
  ];

  makeButtons(): any {
    return Header.navItems.map((navItem: NavItem, index: number) => {
      (<HeaderButton index={index} navItem={navItem} />)
    });
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.navBar}>
          {this.makeButtons()}
        </div>
      </div>
    );
  }

}

export default Header;
