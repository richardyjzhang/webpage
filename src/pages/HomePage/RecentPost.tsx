import React, { useContext } from "react";
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
import baseURL from "utils/baseURL";
import { PostContext } from "./index";

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
    description: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  })
);

interface RecentPostProp {
  order: number;
}

const RecentPost: React.FC<RecentPostProp> = (props) => {
  const classes = useStyles();

  const { order } = props;

  const posts = useContext(PostContext);
  if (posts.length < order + 1) {
    return null;
  }

  const post = posts[order];
  const imgPath = `${baseURL}/image?path=${post.imagePath}`;

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
            <Typography
              className={classes.description}
              variant="subtitle1"
              paragraph
            >
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
            image={imgPath}
            title={post.title}
          />
        </Hidden>
      </Card>
    </CardActionArea>
  );
};

export default RecentPost;
