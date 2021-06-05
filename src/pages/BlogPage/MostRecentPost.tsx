import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Link, Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    overlay: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    content: {
      position: "relative",
      padding: theme.spacing(3),
      [theme.breakpoints.up("md")]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
    title: {
      minHeight: 112,
    },
    description: {
      minHeight: 64,
    },
  })
);

const MostRecentPost = () => {
  const classes = useStyles();

  const mostRecentPost: Post = {
    title: "文章标题 可以比较长 测试换行",
    description:
      "文章描述 可以比较长 测试换行 感觉自己好像梁朝伟在演无间道 捂住脑门晃动你的胯骨轴 好像有事在发愁 Lei jidou ma",
    image: "https://source.unsplash.com/random",
    url: "#",
  };

  return (
    <Paper
      className={classes.root}
      style={{ backgroundImage: `url(${mostRecentPost.image})` }}
    >
      <img
        style={{ display: "none" }}
        src={mostRecentPost.image}
        alt={mostRecentPost.title}
      />
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.content}>
            <div className={classes.title}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {mostRecentPost.title}
              </Typography>
            </div>
            <div className={classes.description}>
              <Typography variant="h5" color="inherit" paragraph>
                {mostRecentPost.description}
              </Typography>
            </div>
            <Link variant="subtitle1" href={mostRecentPost.url}>
              继续阅读
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MostRecentPost;
