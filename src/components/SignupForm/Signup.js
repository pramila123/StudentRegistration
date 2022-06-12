import { Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import FormikController from "../Form/FormikController";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-transform: uppercase;
    letter-spacing: 0.02rem;
  }
  .btn {
    padding: 0.3rem 1rem;
  }
  .error {
    color: red;
    margin-top: 0.5rem;
    margin-left: 1rem;
  }
`;
const Signup = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Please enter your username"),
      password: Yup.string()
        .required("Password Required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Enter uppercase,digit,lowercase and special character at least eight digits"
        ),
    }),
    onSubmit: (values) => {
      const addUser = async () => {
        await axios
          .post("http://localhost:8888/api/add/user", values)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      addUser();

      formik.resetForm();
    },
  });

  return (
    <>
      <SignUpContainer>
        <h2>Signup</h2>
        <Grid container spacing={2} item md={6} pl={2} pr={2}>
          <Grid item xs={12}>
            <Typography>UserName</Typography>
            <FormikController
              control="textfield"
              name="username"
              {...formik.getFieldProps("username")}
            />
          </Grid>
          <div className="error">
            {formik.touched.username ? formik.errors.username : ""}
          </div>
          <Grid item xs={12}>
            <Typography>Password</Typography>
            <FormikController
              control="textfield"
              name="password"
              type="password"
              {...formik.getFieldProps("password")}
            />
          </Grid>
          <div className="error">
            {formik.touched.password ? formik.errors.password : ""}
          </div>
          <Grid item xs={12}>
            <FormikController
              control="buttons"
              name="signup"
              variant="contained"
              className="btn"
              onClick={formik.handleSubmit}
            />
          </Grid>
          <Grid item xs={12} mt={1}>
            <Typography>
              Already a member ? <Link to="/login">Login Here</Link>
            </Typography>
          </Grid>
        </Grid>
      </SignUpContainer>
    </>
  );
};

export default Signup;
