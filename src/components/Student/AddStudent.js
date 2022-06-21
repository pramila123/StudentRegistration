import {
  Dialog,
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

import { semester_data } from "../data";

import SuccessMsg from "../Modal/SuccessMsg";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../Redux/action";
import { initialValues, validationSchema } from "./Validate";

const StyledDialog = styled(Dialog)``;
const StudentContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  h1 {
    background: #70b8e8;
    letter-spacing: 0.04rem;
    text-align: center;
    padding: 0.5rem;
    color: #fff;
  }
  .error {
    color: red;
    margin-top: 0.2rem;
  }
`;

const AddStudent = ({ open, handleClose }) => {
  const [faculty, setFaculty] = useState("");

  const handleChange = (e) => {
    setFaculty(e.target.value);
  };

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.studentReducer);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(addStudent(values));

      formik.resetForm();
    },
  });
  return (
    <>
      <StyledDialog open={open} maxWidth="md" onClose={handleClose}>
        <StudentContainer>
          <h1>Add Student</h1>

          <Grid container spacing={2} item p={3}>
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
                touch={
                  formik.touched.fatherName ? formik.errors.fatherName : ""
                }
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
      </StyledDialog>
      {loading ? <SuccessMsg /> : ""}
    </>
  );
};

export default AddStudent;
