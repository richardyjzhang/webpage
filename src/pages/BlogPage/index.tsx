import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { CssBaseline, Container } from "@material-ui/core";
import Header from "./Header";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const BlogPage = () => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
    </div>
  );
};

export default BlogPage;
