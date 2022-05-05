import React from "react";
import { Grid, Link, Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { GitHub, Twitter, Facebook } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      top: theme.spacing(2),
      position: "sticky",
    },
    about: {
      padding: theme.spacing(2),
      backgroundColor: theme.palette.grey[200],
    },
    social: {
      marginTop: theme.spacing(3),
    },
  })
);

const Sidebar = () => {
  const classes = useStyles();

  const networks = [
    {
      name: "Github",
      icon: GitHub,
      url: "#",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
    },
  ];

  return (
    <div className={classes.root}>
      <Paper className={classes.about}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography>
          个人介绍，各种吹逼在此体现。人有多大胆，地有多大产；鼓足干劲、力争上游、多快好省地进行吹逼，实现“通职位膨胀”
        </Typography>
      </Paper>
      <Typography variant="h6" gutterBottom className={classes.social}>
        Social
      </Typography>
      {networks.map((n) => (
        <Link display="block" variant="body1" href={n.url} key={n.name}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <n.icon />
            </Grid>
            <Grid item>{n.name}</Grid>
          </Grid>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
