import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography, Link, Paper, Grid } from "@material-ui/core";
import baseURL from "utils/baseURL";
import { PostContext } from "./index";

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

  const posts = useContext(PostContext);

  if (posts.length === 0) {
    return null;
  }

  const mostRecentPost = posts[0];
  const imgPath = `${baseURL}/image?path=${mostRecentPost.imagePath}`;

  return (
    <Paper
      className={classes.root}
      style={{
        backgroundImage: `url(${imgPath})`,
      }}
    >
      <img
        style={{ display: "none" }}
        src={imgPath}
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
            <Link variant="subtitle1" href={"#"}>
              继续阅读
            </Link>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MostRecentPost;
