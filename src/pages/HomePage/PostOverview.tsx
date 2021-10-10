import React, { useState } from "react";
import { useRequest } from "ahooks";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactMarkdown from "markdown-to-jsx";
import clsx from "clsx";
import { _fetchOnePostMD } from "services/post";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      margin: theme.spacing(0, 0, 2),
      padding: theme.spacing(2, 2),
      maxWidth: "100%",
      backgroundColor: "inherit",
    },
    overview: {
      maxHeight: 400,
      overflow: "hidden",
    },
    title: {
      fontWeight: "bold",
    },
    meta: {},
    description: {},
    content: {
      maxWidth: "100%",
      overflow: "ellipsis",
    },
    contentMasked: {
      maskImage: "linear-gradient(white 200px, transparent 300px)",
    },
    showAll: {
      position: "absolute",
      left: "50%",
      top: 370,
      transform: "translate(-50%)",
      cursor: "pointer",
    },
  })
);

interface PostProp {
  post: Post;
}

const PostOverview: React.FC<PostProp> = (props) => {
  const { post } = props;
  const classes = useStyles();
  const { data: content } = useRequest<string>(_fetchOnePostMD, {
    initialData: "",
    defaultParams: post.id,
  });

  // overview模式仅展示部分，不展开
  const [overview, setOverview] = useState(true);

  return (
    <Paper
      className={clsx(classes.root, { [classes.overview]: overview })}
      elevation={0}
    >
      <Typography className={classes.title} variant="h5">
        {post.title}
      </Typography>
      <Typography className={classes.meta} variant="body2" color="primary">
        {`${post.createTime} By ${post.author}`}
      </Typography>
      <div
        className={clsx(classes.content, { [classes.contentMasked]: overview })}
      >
        <ReactMarkdown>{content || ""}</ReactMarkdown>
      </div>
      {overview ? (
        <Typography
          className={classes.showAll}
          variant="body1"
          color="primary"
          onClick={() => {
            setOverview(false);
          }}
        >
          阅读全文
        </Typography>
      ) : null}
    </Paper>
  );
};

export default PostOverview;
