import React, { useState, useEffect } from "react";
import {
  FormControl,
  Grid,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import SimpleDrop from "../../atoms/SimpleDrop";
import DatePickerComponent from "../../atoms/DatePickerComponent";

function RegistrationPage({ getTestDetails, onSubmit }) {
  const organizationOptions = [
    { id: "JSS CBSE School", label: "JSS CBSE School" },
    { id: "KMS", label: "KMS" },
    { id: "KRCES", label: "KRCES" },
    { id: "KV", label: "KV" },
  ];

  const gradeOptions = [
    { id: "9th", label: "9th" },
    { id: "10th", label: "10th" },
    { id: "11th", label: "11th" },
    { id: "12th", label: "12th" },
  ];

  const [formData, setFormData] = useState({
    id:0,
    firstName: "",
    lastName: "",
    emailId:"",
    address: "",
    contactNumber: "",
    dateOfBirth: "",
    organization: "",
    grade: "",
    password:"",
  });
  const [studentList, setStudentList] = useState([])
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Retrieve form data from localStorage if it exists
    const savedFormData = localStorage.getItem("studentList");
    if (savedFormData) {
      setStudentList(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const setDate = (date) => {
    const dob =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    setFormData((prevFormData) => ({ ...prevFormData, dateOfBirth: dob }));
  };

  const validate = () => {
    const newErrors = {};
    const pattern = /^[A-Za-z]{6,}$/;
    const addressPattern = /^[A-Za-z0-9\s]{6,}$/;
    const contactPattern = /^[0-9]{10}$/;

    if (!pattern.test(formData.firstName)) {
      newErrors.firstName =
        "First name should be alphabetic and at least 6 characters long.";
    }
    if (!pattern.test(formData.lastName)) {
      newErrors.lastName =
        "Last name should be alphabetic and at least 6 characters long.";
    }
    if (!addressPattern.test(formData.address)) {
      newErrors.address =
        "Address can be alphanumeric and at least 6 characters long.";
    }
    if (!contactPattern.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number should contain only numbers.";
    }
    if (!formData.organization) {
      newErrors.organization = "Please select an organization.";
    }
    if (!formData.grade) {
      newErrors.grade = "Please select a grade.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Check if onSubmit is a function before calling it
      if (typeof onSubmit === "function") {
        onSubmit(formData);
      } else {
        console.warn("onSubmit is not a function");
      }
      // Store form data in localStorage
      const newStudent = {
        ...formData,
        id: studentList.length + 1,
      };

      const updatedStudentList = [...studentList, newStudent];
      localStorage.setItem("studentList", JSON.stringify(updatedStudentList));
      setFormData({
        id: 0,
        firstName: "",
        lastName: "",
        emailId:"",
        address: "",
        contactNumber: "",
        dateOfBirth: "",
        organization: "",
        grade: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div style={{ backgroundColor: "skyblue", padding: "70px" }}>
      <FormControl>
        <Grid container spacing={2} sx={{ bgcolor: "white" }}>
          <Grid item xs={12}>
            <Typography variant="h4" className="d-flex justify-content-center  mt-3">
              Sign Up
            </Typography>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item container xs={6} className="d-flex justify-content-center">
            <Grid item xs={6} className="d-flex justify-content-center  mt-3">
              <TextField
                label="First Name"
                type="text"
                name="firstName"
                onChange={handleChange}
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={6} className="d-flex justify-content-center  mt-3">
              <TextField
                label="Last Name"
                type="text"
                name="lastName"
                onChange={handleChange}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={6} className="d-flex justify-content-center  mt-3">
              <TextField
                label="Email Address"
                type="email"
                name="emailId"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} className="d-flex justify-content-center  mt-3">
              <TextField
                label="Address"
                type="text"
                name="address"
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
              />
            </Grid>
            <Grid item xs={6} className="d-flex justify-content-center  mt-3">
              <TextField
                label="Contact Number"
                type="text"
                name="contactNumber"
                onChange={handleChange}
                error={!!errors.contactNumber}
                helperText={errors.contactNumber}
              />
            </Grid>
            <Grid item xs={6} className="d-flex justify-content-center  mt-3">
              <DatePickerComponent
                label="Date of Birth"
                onInputChange={(e) => setDate(e.$d)}
              />
            </Grid>
            <Grid item xs={6} className="d-flex justify-content-center  mt-3">
              <SimpleDrop
                label="Organization"
                options={organizationOptions}
                name="organization"
                onInputChange={(e) =>
                  handleChange({
                    target: { name: "organization", value: e.target.value },
                  })
                }
                error={!!errors.organization}
                helperText={errors.organization}
              />
            </Grid>
            <Grid item xs={6} className="d-flex justify-content-center  mt-3">
              <SimpleDrop
                label="Class"
                options={gradeOptions}
                name="grade"
                onInputChange={(e) =>
                  handleChange({
                    target: { name: "grade", value: e.target.value },
                  })
                }
                error={!!errors.grade}
                helperText={errors.grade}
              />
            </Grid>
            <Grid item xs={6} className="d-flex justify-content-center mt-3">
              <TextField
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} className="d-flex justify-content-center my-3">
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
      </FormControl>
    </div>
  );
}

// Provide a default prop for onSubmit
RegistrationPage.defaultProps = {
  onSubmit: (data) => console.log("Form submitted with data:", data),
};

export default RegistrationPage;
