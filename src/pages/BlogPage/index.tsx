import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import Header from "./Header";
import MostRecentPost from "./MostRecentPost";
import RecentPost from "./RecentPost";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const BlogPage = () => {
  const classes = useStyles();

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
        </main>
      </Container>
    </div>
  );
};

export default BlogPage;
