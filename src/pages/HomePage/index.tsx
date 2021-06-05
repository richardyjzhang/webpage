import React from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import Header from "./Header";
import MostRecentPost from "./MostRecentPost";
import RecentPost from "./RecentPost";
import PostList from "./PostList";

const BlogPage = () => {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MostRecentPost />
          {/* TODO: order by time desc */}
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <RecentPost />
            </Grid>
            <Grid item xs={12} md={6}>
              <RecentPost />
            </Grid>
          </Grid>
          <Grid container spacing={5}>
            <Grid item xs={12} md={8}>
              <PostList />
            </Grid>
            <Grid item xs={12} md={4}></Grid>
          </Grid>
        </main>
      </Container>
    </div>
  );
};

export default BlogPage;
