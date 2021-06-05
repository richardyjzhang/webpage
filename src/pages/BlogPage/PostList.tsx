import React from "react";
import { Divider, Typography } from "@material-ui/core";
import Post from "../PostPage/Post";

const PostList = () => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        文章列表
      </Typography>
      <Divider />
      {[1, 2, 3, 4, 5].map((d) => (
        <Post />
      ))}
    </div>
  );
};

export default PostList;
