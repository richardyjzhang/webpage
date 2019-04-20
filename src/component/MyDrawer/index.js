import React from 'react';
import { Drawer, Divider } from '@material-ui/core';

export default class MyDrawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: true,
    };
  }

  onClickDrawerHandler = () => {
    const { drawerOpen } = this.state;
    this.setState({
      drawerOpen: !drawerOpen,
    });
  };

  render() {
    const { drawerOpen } = this.state;
    return (
      <Drawer
        variant="permanent"
        open={drawerOpen}
      >
        <Divider />
      </Drawer>
    );
  }
}