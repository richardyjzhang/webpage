import React from "react";
import { useRequest } from "ahooks";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import { _fetchPosts } from "services/post";
import Header from "./Header";
import MostRecentPost from "./MostRecentPost";
import RecentPost from "./RecentPost";
import PostList from "./PostList";
import Sidebar from "./Sidebar";

export const PostContext = React.createContext<Post[]>([]);

const BlogPage = () => {
  const { data: posts } = useRequest<Post[]>(_fetchPosts, { initialData: [] });

  return (
    <div>
      <PostContext.Provider value={posts || []}>
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
              <Grid item xs={12} md={4}>
                <Sidebar />
              </Grid>
            </Grid>
          </main>
        </Container>
      </PostContext.Provider>
    </div>
  );
};

export default BlogPage;
