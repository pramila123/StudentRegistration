import {
  FormControl,
  Grid,
  MenuItem,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import FormikController from "../Form/FormikController";
import { useFormik } from "formik";
import * as Yup from "yup";
import { semester_data } from "../data";

import SuccessMsg from "../Modal/SuccessMsg";
import { useDispatch } from "react-redux";
import { addStudent } from "../Redux/action";

const StudentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .error {
    color: red;
    margin-top: 0.2rem;
  }
`;

const AddStudent = () => {
  const [faculty, setFaculty] = useState("");

  const handleChange = (e) => {
    setFaculty(e.target.value);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const dispatch=useDispatch();
  const formik = useFormik({
    initialValues: {
      sid: "",
      semester: "",
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "",
      dob: "",
      joiningDate: "",
      faculty: "",
      email: "",
      contact: "",
      fatherName: "",
      parentPhone: "",
      address: "",
    },
    validationSchema: Yup.object().shape({
      sid: Yup.string().required("Required"),
      semester: Yup.string().required("Please select any options"),
      firstName: Yup.string()
        .matches(/[a-zA-Z]+/g, "Only valid letter")
        .required("Required"),

      lastName: Yup.string()
        .matches(/[a-zA-Z]+/g, "Only valid letter")
        .required("Required"),
      gender: Yup.string().required("Please select one value"),
      dob: Yup.string().required("Required"),
      joiningDate: Yup.date().required("Required"),
      faculty: Yup.string().required("Please select any options"),
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email")
        .required("Required"),
      contact: Yup.string()
        .required("Required")
        .matches(
          /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
          "Please enter valid phone number"
        )
        .max(10),
      fatherName: Yup.string()
        .required("Required")
        .matches(/[a-zA-Z]+/g, "Only valid letter"),
      parentPhone: Yup.string()
        .required("Required")
        .matches(
          /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
          "Please enter valid phone number"
        )
        .max(10),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
     
dispatch(addStudent(values),setShow(true))

      formik.resetForm();
    },
  });

  return (
    <>
      <StudentContainer>
        <h1>Add Student</h1>
        <Grid container spacing={2} item md={6} p={2}>
          <Grid item xs={12} md={6}>
            <FormikController
              control="textfield"
              title="StudentId"
              error={!!formik.errors.sid}
              touch={formik.touched.sid ? formik.errors.sid : ""}
              {...formik.getFieldProps("sid")}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography>Semester</Typography>

            <FormControl size="small" fullWidth={true}>
              <Select
                value={faculty}
                onChange={handleChange}
                error={!!formik.errors.semester}
                {...formik.getFieldProps("semester")}
              >
                {semester_data.map((item, index) => {
                  return (
                    <MenuItem
                      control="select"
                      value={item.semester_name}
                      key={item.id}
                    >
                      {item.semester_name}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <Typography className="error">
              {formik.touched.semester ? formik.errors.semester : ""}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormikController
              title="FirstName"
              control="textfield"
              error={!!formik.errors.firstName}
              touch={formik.touched.firstName ? formik.errors.firstName : ""}
              {...formik.getFieldProps("firstName")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormikController
              control="textfield"
              title="MiddleName"
              {...formik.getFieldProps("middleName")}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <FormikController
              title="LastName"
              control="textfield"
              error={!!formik.errors.lastName}
              touch={formik.touched.lastName ? formik.errors.lastName : ""}
              {...formik.getFieldProps("lastName")}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <RadioGroup
                sx={{
                  display: "flex",

                  alignItems: "center",
                  gap: "2rem",
                }}
                row
                {...formik.getFieldProps("gender")}
              >
                <Typography>Gender</Typography>
                <FormikController
                  control="radio"
                  value="Female"
                  label="Female"
                />
                <FormikController control="radio" value="Male" label="Male" />
                <FormikController
                  control="radio"
                  value="Other"
                  label="Others"
                />
              </RadioGroup>
              <Typography className="error">
                {formik.touched.gender ? formik.errors.gender : ""}
              </Typography>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <FormikController
              title="Date of Birth"
              control="textfield"
              type="date"
              error={!!formik.errors.dob}
              touch={formik.touched.dob ? formik.errors.dob : ""}
              {...formik.getFieldProps("dob")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormikController
              title="Joining Year"
              control="textfield"
              type="date"
              error={!!formik.errors.joiningDate}
              touch={
                formik.touched.JoiningDate ? formik.errors.joiningDate : ""
              }
              {...formik.getFieldProps("joiningDate")}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",

              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Typography>Faculty</Typography>

            <FormControl size="small" fullWidth={true}>
              <Select
                value={faculty}
                onChange={handleChange}
                error={!!formik.errors.faculty}
                {...formik.getFieldProps("faculty")}
              >
                <MenuItem control="select" value="BIM">
                  BIM
                </MenuItem>
                <MenuItem control="select" value="BBA">
                  BBA
                </MenuItem>
                <MenuItem control="select" value="BBM">
                  BBM
                </MenuItem>
              </Select>
              <Typography className="error">
                {formik.touched.faculty ? formik.errors.faculty : ""}
              </Typography>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormikController
              title="Email"
              control="textfield"
              error={!!formik.errors.email}
              touch={formik.touched.email ? formik.errors.email : ""}
              {...formik.getFieldProps("email")}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikController
              title="Contact No"
              control="textfield"
              error={!!formik.errors.contact}
              touch={formik.touched.contact ? formik.errors.contact : ""}
              {...formik.getFieldProps("contact")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormikController
              title="Father's Name"
              control="textfield"
              error={!!formik.errors.fatherName}
              touch={formik.touched.fatherName ? formik.errors.fatherName : ""}
              {...formik.getFieldProps("fatherName")}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormikController
              title="Parent's Contact Number"
              control="textfield"
              error={!!formik.errors.parentPhone}
              touch={
                formik.touched.parentPhone ? formik.errors.parentPhone : ""
              }
              {...formik.getFieldProps("parentPhone")}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikController
              title="Temporary Address"
              control="textfield"
              error={!!formik.errors.address}
              touch={formik.touched.address ? formik.errors.address : ""}
              multiline
              rows={2}
              {...formik.getFieldProps("address")}
            />
          </Grid>
          <Grid item xs={12}>
            <FormikController
              variant="contained"
              control="buttons"
              name="Register"
              color="success"
              onClick={formik.handleSubmit}
            />
          </Grid>
        </Grid>
      </StudentContainer>
      <SuccessMsg
        open={show}
        handleClose={handleClose}
        title="Data Inserted Successfully"
      />
    </>
  );
};

export default AddStudent;
