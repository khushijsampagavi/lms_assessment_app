import { useEffect, useState } from "react";
import ModalComponent from "../../molecules/ModalComponent";
import TableComponent from "../../molecules/TableComponent";
import { Grid } from "@mui/material";
import SignupPage from "../../forms/SignupPage";

function ReusableUlLayout() {
  const [columns, setColumns] = useState([
    { field: "emailId", headerName: "emailId", width: 150 },
    { field: "password", headerName: "password", width: 150 },
    { field: "confirmPassword", headerName: "confirmPassword", width: 150 },
    
 ]);
 
  const [signupDetails, setSignupDetails] = useState([]);

  const getSignupDetails = (param) => {
    setSignupDetails(param);
 }; 

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <ModalComponent openButtonText="Add New" title=" Add New SignupPage">
            <SignupPage getSignupDetails={getSignupDetails} />
          </ModalComponent>
        </Grid>
        <Grid item xs={12}>
          <TableComponent columns={columns} rows={signupDetails} rowId={signupDetails.length}/>
        </Grid>
      </Grid>
    </>
  );
}

export default ReusableUlLayout;
