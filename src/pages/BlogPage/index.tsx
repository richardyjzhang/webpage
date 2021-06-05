import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "./Header";
import MostRecentPost from "./MostRecentPost";

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
        </main>
      </Container>
    </div>
  );
};

export default BlogPage;
