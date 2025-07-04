import { useEffect, useState } from "react";
import ModalComponent from "../../molecules/ModalComponent";
import TableComponent from "../../molecules/TableComponent";
import { Grid } from "@mui/material";
import AddTeacher from "../../forms/AddTeacher";

function TeacherManagement() {
  const [columns, setColumns] = useState([
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "organization", headerName: "Organization", width: 150 },
    { field: "joiningDate", headerName: "Joining Date", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
  ]);

  const [teacherDetails, setTeacherDetails] = useState([]);
  
  const getTeacherDetails = (param) => {
    setTeacherDetails(param);
  };

  useEffect(() => {
    const storedTeacherData = JSON.parse(localStorage.getItem("teacherList"));
    if (storedTeacherData) {
      setTeacherDetails(storedTeacherData);
    }
  }, []);

  return (
    <>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <ModalComponent openButtonText="Add New" title="Add New Teacher">
            <AddTeacher teacherDetails={teacherDetails} getTeacherList={getTeacherDetails} />
          </ModalComponent>
        </Grid>
        <Grid item xs={12}>
          <TableComponent columns={columns} rows={teacherDetails} />
        </Grid>
      </Grid>
    </>
  );
}

export default TeacherManagement;
