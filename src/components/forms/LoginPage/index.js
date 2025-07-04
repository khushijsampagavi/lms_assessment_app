import { FormControl, Grid } from "@mui/material";
import InputBoxComponent from "../../atoms/InputBoxComponent";
import ButtonComponent from "../../atoms/ButtonComponent";
import {  useState } from "react";
import { useEffect } from "react";

function LoginPage() {

  const [formData, setFormData] = useState({
    email_id: "",
    log_password: "",
  });

  const [LogInfo, setLogInfo] = useState([]);

  useEffect(()=>
    console.log(LogInfo)
  ,[LogInfo])

  return (
    <div>
      <FormControl sx={{ width: "500px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <InputBoxComponent
              label="Email ID"
              type="email"
              name="email_id"
              onInputChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <InputBoxComponent
              label="Password"
              type="password"
              name="log_password"
              onInputChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Grid>

          <Grid item xs={12}>
            <ButtonComponent
              label="Submit"
              type="Submit"
              onclickButton={() =>
                setLogInfo((prev) => [...prev, formData])
              }
            />
          </Grid>

        </Grid>
      </FormControl>
               
    </div>
  );
}

export default LoginPage;
