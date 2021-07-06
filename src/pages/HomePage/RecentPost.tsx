import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Link,
  Hidden,
  CardMedia,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: "flex",
    },
    details: {
      flex: 1,
    },
    media: {
      width: 160,
    },
  })
);

const RecentPost = () => {
  const classes = useStyles();

  const post: Post = {
    title: "文章标题",
    description: "文章描述",
    author: "作者",
    createTime: "2006-01-02 15:04:05",
    imagePath: "https://source.unsplash.com/random",
  };

  return (
    <CardActionArea href="#">
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.createTime}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Link variant="subtitle1" href={"#"}>
              继续阅读
            </Link>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.media}
            image={post.imagePath}
            title={post.title}
          />
        </Hidden>
      </Card>
    </CardActionArea>
  );
};

export default RecentPost;
