
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { useEffect } from "react";
import { TextField,Button } from "@mui/material";

function SignupPage({getSignupDetails}) {

  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
    confirmPassword: "",
  });
  const [signupList, setSignupList] = useState([]);
  const [errors,setErrors]=useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value,});
  };

  const dataform = () => {
    let validationErrors = {};
    
    if(!formData.emailId.trim()){
      validationErrors.emailId="EmailId is Required"
    }else if(!/\S+@\S+\.\S+/.test(formData.emailId)){
      validationErrors.emailId="EmailId is Invalid"
    }
   
    if(!formData.password.trim()){
      validationErrors.password="password is Required"
    }else if(formData.password.length<8){
      validationErrors.password="password should be at least 8 chars"
    }

    if(!formData.confirmPassword.trim()){
      validationErrors.confirmPassword="confirmpassword is Required"
    }else if(formData.confirmPassword!== formData.password){
      validationErrors.confirmPassword="password not matched "
    }
    
    setErrors(validationErrors);
    return Object.keys(validationErrors).length===0;
  };
   
  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataform()) {
      const newFormData={...formData};
          setSignupList([...signupList,newFormData]);
          localStorage.setItem("formData", JSON.stringify([...signupList, newFormData]));
        }
      };

      useEffect(() =>{
      const storedSignupList = localStorage.getItem("signupList");
      if (storedSignupList) {
      setSignupList(JSON.parse(storedSignupList));
      }
    }, []); 

    useEffect(() => {
      localStorage.setItem("signupData", JSON.stringify(signupList));
      let signupData = JSON.parse(localStorage.getItem("signupData"));
      if(signupList.length){
      getSignupDetails(signupData);
      }
    }, [signupList]);
      
  return (
    <div>
      <FormControl sx={{ width: "500px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <TextField
              label="EmailId"
              type="text"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              error={!!errors.emailId}
              helperText={errors.emailId}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Password"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="ConfirmPassword"
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
          </Grid>
          <Grid item xs={12}>
          <Button variant="contained" 
          color="primary" 
          onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}
export default SignupPage;


