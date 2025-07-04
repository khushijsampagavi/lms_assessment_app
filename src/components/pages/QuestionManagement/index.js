import React from "react";
import { Grid } from "@mui/material";
import TableComponent from "../../molecules/TableComponent";

function QuestionManagement({ questionList, selectedSubject }) {
  const columns = [
    { field: "test", headerName: "Test", width: 150 },
    { field: "marks", headerName: "Marks", width: 150 },
    { field: "question", headerName: "Question", width: 300 },
    { field: "corrAns", headerName: "Correct Answer", width: 150 },
  ];

  return (
    <div>
      <h3>{selectedSubject} Question List</h3>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <TableComponent columns={columns} rows={questionList} getRowId={(row) => row.id} />
        </Grid>
      </Grid>
    </div>
  );
}

export default QuestionManagement;

