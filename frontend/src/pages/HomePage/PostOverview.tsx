import React, { useState } from "react";
import { useRequest } from "ahooks";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import clsx from "clsx";
import baseURL from "utils/baseURL";
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
    description: {
      marginTop: theme.spacing(2, 0),
    },
    content: {
      maxWidth: "100%",
      overflow: "ellipsis",
    },
    contentMasked: {
      maskImage: "linear-gradient(white 200px, transparent 300px)",
    },
    readAll: {
      cursor: "pointer",
    },
    mdH2: {
      fontWeight: "normal",
    },
    mdH3: {
      fontWeight: "normal",
    },
    mdCode: {
      backgroundColor: theme.palette.grey[200],
      whiteSpace: "pre-wrap",
    },
  })
);

interface PostProp {
  post: Post;
}

const PostOverview: React.FC<PostProp> = (props) => {
  const { post } = props;
  const classes = useStyles();
  const { run: fetchOnePostMD, data: content } = useRequest<string>(
    _fetchOnePostMD,
    {
      manual: true,
      initialData: "",
      defaultParams: post.id,
    }
  );

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

      {overview ? (
        <div>
          <Typography variant="body1" color="textSecondary" className={classes.description}>
            {post.description}
          </Typography>
          <Typography
            className={classes.readAll}
            variant="body1"
            color="primary"
            onClick={() => {
              fetchOnePostMD(post.id);
              setOverview(false);
            }}
          >
            阅读全文
          </Typography>
        </div>
      ) : (
        <div className={classes.content}>
          <ReactMarkdown
            transformImageUri={(uri) => {
              if (uri.startsWith('./')) {
                const imgPath = `${baseURL}/post-image?postId=${post.id}&path=${uri.substring(2)}`;
                return imgPath;
              }
              return uri;
            }}
            components={{
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '')
                return !inline && match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, '')}
                    style={okaidia}
                    language={match[1]}
                    PreTag="div"
                    showLineNumbers
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}
          >
            {content || ""}
          </ReactMarkdown>
        </div>
      )}
    </Paper>
  );
};

export default PostOverview;
