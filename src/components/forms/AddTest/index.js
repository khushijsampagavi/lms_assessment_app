import InputBoxComponent from "../../atoms/InputBoxComponent";
import SimpleDrop from "../../atoms/SimpleDrop";
import TimePickerComp from "../../atoms/TimePickerComp";
import ButtonComponent from "../../atoms/ButtonComponent";
import { FormControl, Grid } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

function AddTest({ getTestDetails }) {
  const subjects = [
    { id: "English", label: "English" },
    { id: "Science", label: "Science" },
    { id: "Social", label: "Social" },
  ];

  const [formData, setFormData] = useState({
    subjects: "",
    totalmarks: "",
    totalqns: "",
    passmarks: "",
    starttime: "",
    timeduration: "",
    endtime: "",
  });

  const [testList, setTestList] = useState([]);
  useEffect(() => {
    localStorage.setItem("testList", JSON.stringify(testList));
    let testData = JSON.parse(localStorage.getItem("testList"));
    getTestDetails(testData);
  }, [testList]);

 
  return (
    <div>
      <FormControl sx={{ width: "500px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <SimpleDrop
              label="Subjects"
              options={subjects}
              name="subjects"
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
              label="Total Marks"
              type="number"
              name="totalmarks"
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
              label="Number.of.Qns"
              type="number"
              name="totalqns"
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
              label="Passing Marks"
              type="number"
              name="passmarks"
              onInputChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TimePickerComp
              label="Start Time"
              name="starttime"
              onInputChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  starttime: e.$H + ":" + e.$m,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <TimePickerComp
              label="End Time"
              name="endtime"
              onInputChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  endtime: e.$H + ":" + e.$m,
                }))
              }
            />
          </Grid>
          <Grid item xs={6}>
            <InputBoxComponent
              label="Time Duration"
              type="number"
              name="timeduration"
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
              onclickButton={() => setTestList((prev) => [...prev, formData])}
            />
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}

export default AddTest;


/*import React, { useState } from "react";

const AddQuestion = ({ getQuestionDetails }) => {
  const [question, setQuestion] = useState("");
  const [optionA, setOptionA] = useState("");
  const [optionB, setOptionB] = useState("");
  const [optionC, setOptionC] = useState("");
  const [optionD, setOptionD] = useState("");
  const [corrAns, setCorrAns] = useState("");
  const [marks, setMarks] = useState("");
  const [test, setTest] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuestion = {
      test,
      marks,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      corrAns,
    };

    try {
      const response = await fetch("/api/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuestion),
      });

      if (response.ok) {
        const data = await response.json();
        getQuestionDetails(data);
      } else {
        console.error("Error adding question:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      Form fields for question, options, correct answer, marks, test 
      <input type="text" value={test} onChange={(e) => setTest(e.target.value)} placeholder="Test" required />
      <input type="text" value={marks} onChange={(e) => setMarks(e.target.value)} placeholder="Marks" required />
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Question" required />
      <input type="text" value={optionA} onChange={(e) => setOptionA(e.target.value)} placeholder="Option A" required />
      <input type="text" value={optionB} onChange={(e) => setOptionB(e.target.value)} placeholder="Option B" required />
      <input type="text" value={optionC} onChange={(e) => setOptionC(e.target.value)} placeholder="Option C" required />
      <input type="text" value={optionD} onChange={(e) => setOptionD(e.target.value)} placeholder="Option D" required />
      <input type="text" value={corrAns} onChange={(e) => setCorrAns(e.target.value)} placeholder="Correct Answer" required />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default AddQuestion;*/
