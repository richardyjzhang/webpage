import React, { useContext } from "react";
import { Divider, Typography, Paper } from "@material-ui/core";
import PostOverview from "./PostOverview";
import { PostContext } from "./index";

const PostList = () => {
  const posts = useContext(PostContext);

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        文章列表
      </Typography>
      <Divider />
      <Paper elevation={2}>
        {posts.map((p) => (
          <PostOverview post={p} />
        ))}
      </Paper>
    </div>
  );
};

export default PostList;
