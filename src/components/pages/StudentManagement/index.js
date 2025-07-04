import React, { useState, useEffect } from "react";
import ModalComponent from "../../molecules/ModalComponent";
import { Grid, Button, Checkbox } from "@mui/material";
import RegistrationPage from "../RegistrationPage";
import { DataGrid } from "@mui/x-data-grid";

function StudentManagement() {
  const [columns] = useState([
    {
      field: "select",
      headerName: "Select",
      width: 100,
      renderCell: (params) => (
        <Checkbox
          color="primary"
          onChange={() => handleRowCheckboxToggle(params.row.id)}
        />
      ),
    },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "address", headerName: "Address", width: 150 },
    { field: "contactNumber", headerName: "Contact Number", width: 150 },
    { field: "dateOfBirth", headerName: "Date of Birth", width: 150 },
    { field: "organization", headerName: "Organization", width: 150 },
    { field: "grade", headerName: "Class", width: 150 },
  ]);

  const [students, setStudents] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem("studentList")) || [];
    setStudents(storedStudents);
  }, []);

  const handleFormSubmit = (formData) => {
    const updatedStudents = [...students, formData];
    setStudents(updatedStudents);
    localStorage.setItem("studentList", JSON.stringify(updatedStudents));
  };

  const handleRowCheckboxToggle = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDelete = () => {
    selectedRows.map(id => {
      localStorage.removeItem(`student_${id}`);
    });

    const updatedStudents = students.filter(student => !selectedRows.includes(student.id));
    setStudents(updatedStudents);
    localStorage.setItem("studentList", JSON.stringify(updatedStudents));

    setSelectedRows([]);
    setDeleteModalOpen(false);
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <ModalComponent openButtonText="Delete" title="Delete" open={deleteModalOpen}>
          <div>
            <p>Are you sure you want to delete {selectedRows.length} selected row(s)?</p>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" onClick={() => setDeleteModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </ModalComponent>
      </Grid>
      <Grid item xs={12}>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={students}
            columns={columns}
            checkboxSelection={false} 
            pageSize={5}
            pagination
            onRowClick={(params) => handleRowCheckboxToggle(params.row.id)}
            selectionModel={selectedRows}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default StudentManagement;
