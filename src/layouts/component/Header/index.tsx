import React from 'react';
import router from 'umi/router';
import styles from './index.css';

interface NavItem {
  text: string;
  href: string;
}
interface IButtonProps {
  key: number;
  navItem: NavItem;
}

class HeaderButton extends React.Component<IButtonProps> {

  onClick = () => {
    router.push(this.props.navItem.href);
  }

  render() {
    return (
      <button
        className={styles.navButton}
        key={this.props.key}
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
    const buttons = Header.navItems.map((navItem: NavItem, index: number) => {
      return <HeaderButton key={index} navItem={navItem} />;
    });
    return buttons;
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
