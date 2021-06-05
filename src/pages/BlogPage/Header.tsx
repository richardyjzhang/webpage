import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  Toolbar,
  CssBaseline,
  Typography,
  Button,
  InputBase,
  Link,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
      flex: 1,
    },
    search: {
      position: "relative",
      width: "100%",
      marginLeft: 0,
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    searchInput: {
      width: "100%",
      transition: theme.transitions.create("width"),
      margin: theme.spacing(2),
      paddingBottom: 1, // 防止focus时由于下方的border抖动
      paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
      [theme.breakpoints.up("sm")]: {
        width: "0",
        "&:focus": {
          width: theme.spacing(24),
          borderBottom: "1px solid",
        },
      },
    },
    toolbarSecondary: {
      justifyContent: "space-between",
      overflowX: "auto",
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  })
);

const links = [
  {
    title: "修电脑",
    url: "#",
  },
  {
    title: "瞎鼓捣",
    url: "#",
  },
  {
    title: "瞎看书",
    url: "#",
  },
  {
    title: "瞎合计",
    url: "#",
  },
  {
    title: "瞎溜达",
    url: "#",
  },
  {
    title: "拍片儿",
    url: "#",
  },
  {
    title: "乱七八糟",
    url: "#",
  },
];

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Toolbar className={classes.toolbar}>
        <Typography
          className={classes.toolbarTitle}
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
        >
          FUCK
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Search..."
            classes={{ input: classes.searchInput }}
          />
        </div>
        <Button variant="outlined" size="small">
          Log in
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {links.map((link) => (
          <Link className={classes.toolbarLink} href={link.url}>
            {link.title}
          </Link>
        ))}
      </Toolbar>
    </div>
  );
};

export default Header;
