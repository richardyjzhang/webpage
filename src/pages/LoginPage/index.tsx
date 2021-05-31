import React, { FormEvent, useState } from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Link,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { LockOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    copyright: {
      margin: theme.spacing(8, 0),
    },
  })
);

const LoginPage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailValid = Boolean(email);
    const passwordValid = Boolean(password);
    setErrors({
      email: emailValid ? "" : "Email is required",
      password: passwordValid ? "" : "Password is required",
    });
    if (emailValid && passwordValid) {
      alert(`Email: ${email}\nPassword: ${password}`);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            id="email"
            required
            label="Email Address"
            margin="normal"
            name="email"
            autoFocus
            autoComplete="email"
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email}
            onBlur={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            id="password"
            required
            type="password"
            label="Password"
            margin="normal"
            name="password"
            autoComplete="current-password"
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password}
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        </form>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </div>
      <Typography
        className={classes.copyright}
        variant="body2"
        align="center"
        color="textSecondary"
      >
        {"Copyright © "}
        <Link color="inherit" href="https://zhangrichard.com">
          zhangrichard.com
        </Link>
        {` ${new Date().getFullYear()}.`}
      </Typography>
    </Container>
  );
};

export default LoginPage;
