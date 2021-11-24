import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Link,
  Typography,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@material-ui/core";
import PrimaryButton from "../../common/controls/PrimaryButton";
import TextField from "../../common/controls/InputField";

const useStyles = makeStyles((theme) => ({
  signInContainer: {
    minHeight: "100vh",
  },
  inputForm: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    boxShadow: "0px 30px 60px #00000026",
    borderRadius: 20,
    maxWidth: 686,
    width: "100%",
    padding: "60px 120px",
    [theme.breakpoints.down("sm")]: {
      padding: 60,
    },
  },
  inputField: {
    marginBottom: "20px",
  },
  welcome: {
    letterSpacing: "1.8px",
    color: "#FF4F00",
    fontSize: 36,
    fontFamily: "Montserrat-bold",
    marginTop: "60px",
    marginBottom: "30px",
  },
  loginMessage: {
    marginBottom: "30px",
    color: "#333333",
    fontFamily: "SourceSansPro-Regular",
    opacity: 1,
  },
  errorText: {
    color: theme.palette.danger.main,
    lineHeight: 1,
    marginTop: "10px",
    fontFamily: "SourceSansPro-Regular",
  },
  submit: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "50px",
  },
  forgetPassword: {
    color: "#4c84ff",
    cursor: "pointer",
    marginTop: "10px",
  },
  logoIcon: {
    width: "100%",
    display: "flex",
    justifyContent: "left",
  },
  contactText: {
    display: "inline",
    color: theme.palette.primary.main,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
    width: "100%",
  },
}));

const Login = () => {
  const classes = useStyles();
  const [value, setValue] = useState("student");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
      //router.push("/");
    },
  });

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.signInContainer}
      >
        <Grid item xs={12} className={classes.inputForm}>
          <Typography className={classes.welcome}>Welcome!</Typography>
          <Typography className={classes.loginMessage}>
            Please login to the system
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <div className={classes.inputField}>
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email Address"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                placeholder="Email Address"
                value={formik.values.email}
              />
            </div>
            <div className={classes.inputField}>
              <TextField
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Password"
                name="password"
                placeholder="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="Password"
                value={formik.values.password}
              />
            </div>
            <Grid container>
              <RadioGroup
                value={value}
                onChange={handleChange}
                className={classes.radioGroup}
              >
                <FormControlLabel
                  value="student"
                  control={<Radio />}
                  label="Student"
                />
                <FormControlLabel
                  value="faculty"
                  control={<Radio />}
                  label="Faculty"
                />
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                />
              </RadioGroup>
            </Grid>
            <Grid container justify="space-between" alignItems="center">
              <PrimaryButton
                className={classes.marginR20}
                disabled={formik.isSubmitting}
                type="submit"
              >
                LOGIN
              </PrimaryButton>
              <Link>Forget Password?</Link>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
