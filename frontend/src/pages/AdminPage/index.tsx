import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ChevronRight, ChevronLeft } from "@material-ui/icons";
import clsx from "clsx";

// 左侧抽屉宽度
const drawerWidth = 180;

// 标题栏高度
const toolBarHeight = 64;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.12)",
    },
    toolBar: {
      height: toolBarHeight,
    },
    drawer: {
      flexShrink: 0,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create(["width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    drawerClose: {
      width: theme.spacing(8),
      transition: theme.transitions.create(["width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
    },
    drawerContainer: {
      overflow: "auto",
      height: `calc(100% - ${toolBarHeight}px)`,
    },
    drawerFooter: {
      position: "absolute",
      bottom: theme.spacing(1),
      left: theme.spacing(1),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    contentShift: {
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
  })
);

const HomePage = () => {
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar className={classes.toolBar}>
          <Typography variant="h6">HOMEPAGE</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        })}
        classes={{
          paper: clsx(classes.drawer, {
            [classes.drawerOpen]: drawerOpen,
            [classes.drawerClose]: !drawerOpen,
          }),
        }}
        variant="permanent"
      >
        <div className={classes.toolBar} />
        <div className={classes.drawerContainer}>
          <IconButton
            className={classes.drawerFooter}
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
          >
            {drawerOpen ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen,
        })}
      >
        <div className={classes.toolBar} />
        FUCK
      </main>
    </div>
  );
};

export default HomePage;
