import { useEffect, useState } from "react";
import AddTest from "../../forms/AddTest";
import ModalComponent from "../../molecules/ModalComponent";
import TableComponent from "../../molecules/TableComponent";
import { Grid } from "@mui/material";

function TestManagement() {
  const [columns, setColumns] = useState([
    { field: "Subject", headerName: "Subjects", width: 150 },
    { field: "Passing Marks", headerName: "Passing Marks", width: 150 },
    { field: "No of Questions", headerName: "No of Questions", width: 150 },
    { field: "Start Time", headerName: "Start Time", width: 150 },
    { field: "End Time", headerName: "End Time", width: 150 },
    { field: "Time Duration", headerName: "Time Duration", width: 150 },
  ]);
  const [testDetails, setTestDetails] = useState();
  const getTestDetails = (param) => {
      setTestDetails(param);
  };
  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <ModalComponent openButtonText="Add New" title="Add New Test">
            <AddTest getTestDetails={getTestDetails}/>
          </ModalComponent>
        </Grid>
        <Grid item xs={12}>
          <TableComponent columns={columns} rows={testDetails}/>
        </Grid>
      </Grid>
    </>
  );
}

export default TestManagement;


