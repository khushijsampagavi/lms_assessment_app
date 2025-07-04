import { FormControl, Grid, Typography } from "@mui/material";
import InputBoxComponent from "../../atoms/InputBoxComponent";
import SimpleDrop from "../../atoms/SimpleDrop";
import DatePickerComponent from "../../atoms/DatePickerComponent";
import ButtonComponent from "../../atoms/ButtonComponent";
import TextAreaComponent from "../../atoms/TextAreaComponent";
import { useState, useEffect } from "react";

function AddTeacher({ teacherDetails, getTeacherList }) {
  const organization = [
    { id: "KLE College", label: "KLE College" },
    { id: "JSS College", label: "JSS College" },
    { id: "KUD University", label: "KUD University" },
    { id: "Mysore University", label: "Mysore University" },
  ];

  const [formData, setFormData] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    organization: "",
    joiningDate: "",
    address: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = () => {
    let formErrors = {};

    if (!/^[A-Za-z]+$/.test(formData.firstName.trim())) {
      formErrors.firstName = "First Name should contain only characters";
    }

    if (!/^[A-Za-z]+$/.test(formData.lastName.trim())) {
      formErrors.lastName = "Last Name should contain only characters";
    }

    if (!formData.organization) {
      formErrors.organization = "Organization is required";
    }

    if (!formData.joiningDate) {
      formErrors.joiningDate = "Joining Date is required";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const newTeacher = {
        ...formData,
        id: teacherDetails.length + 1,
      };

      const updatedTeacherList = [...teacherDetails, newTeacher];
      localStorage.setItem("teacherList", JSON.stringify(updatedTeacherList));
      getTeacherList(updatedTeacherList);

      setFormData({
        id: 0,
        firstName: "",
        lastName: "",
        organization: "",
        joiningDate: "",
        address: "",
        email: "",
        password: "",
      });
      setSubmitted(false);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <FormControl sx={{ width: "500px" }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={6}>
          <InputBoxComponent
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onInputChange={handleChange}
            error={submitted && errors.firstName}
          />
          {submitted && errors.firstName && (
            <Typography variant="body2" color="error">
              {errors.firstName}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <InputBoxComponent
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onInputChange={handleChange}
            error={submitted && errors.lastName}
          />
          {submitted && errors.lastName && (
            <Typography variant="body2" color="error">
              {errors.lastName}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <SimpleDrop
            label="Organization"
            options={organization}
            name="organization"
            value={formData.organization}
            onInputChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePickerComponent
            label="Joining Date"
            value={formData.joiningDate}
            onInputChange={(date) =>
              setFormData((prevData) => ({
                ...prevData,
                joiningDate: date,
              }))
            }
          />
        </Grid>
        <Grid item xs={6}>
          <InputBoxComponent
            label="Email"
            type="text"
            name="email"
            value={formData.email}
            onInputChange={handleChange}
            error={submitted && errors.email}
          />
          {submitted && errors.email && (
            <Typography variant="body2" color="error">
              {errors.email}
            </Typography>
          )}
        </Grid>
        <Grid item xs={6}>
          <InputBoxComponent
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onInputChange={handleChange}
            error={submitted && errors.password}
          />
          {submitted && errors.password && (
            <Typography variant="body2" color="error">
              {errors.password}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextAreaComponent
            label="Address"
            name="address"
            value={formData.address}
            onInputChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <ButtonComponent
            label="Submit"
            type="submit"
            onclickButton={handleSubmit}
          />
        </Grid>
      </Grid>
    </FormControl>
  );
}

export default AddTeacher;
