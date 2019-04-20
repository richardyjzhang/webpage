import React from 'react';
import classNames from 'classnames';

import { Drawer, Divider, IconButton, Toolbar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  drawer: {
    width: 240,
  },
  drawerExpanded: {
    width: 240,
  },
  drawerFolded: {
    width: 20,
  },
}

class MyDrawer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      drawerExpanded: false,
    };
  }

  onClickDrawerHandler = () => {
    const { drawerExpanded } = this.state;
    this.setState({
      drawerExpanded: !drawerExpanded,
    });
  };

  render() {
    const { drawerExpanded } = this.state;
    const { classes } = this.props;
    console.log(classes);

    return (
      <Drawer
        open
        variant="permanent"
        className={classNames(classes.drawer, {
          [classes.drawerExpanded]: drawerExpanded,
          [classes.drawerFolded]: !drawerExpanded,
        })}
        classes={{
          paper: classNames({
            [classes.drawerExpanded]: drawerExpanded,
            [classes.drawerFolded]: !drawerExpanded,
          })
        }}
      >
        <IconButton onClick={this.onClickDrawerHandler}>
          {drawerExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
        <Divider />
        <Toolbar>
          真黑啊哦你真黑你真不白
        </Toolbar>
      </Drawer>
    );
  }
}

export default withStyles(styles)(MyDrawer);