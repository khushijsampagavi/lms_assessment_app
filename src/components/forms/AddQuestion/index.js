import { FormControl, Grid } from "@mui/material";
import InputBoxComponent from "../../atoms/InputBoxComponent";
import SimpleDrop from "../../atoms/SimpleDrop";
import ButtonComponent from "../../atoms/ButtonComponent";
import TextAreaComponent from "../../atoms/TextAreaComponent";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function AddQuestion({ getQuestionDetails, subjects }) {
  const [formData, setFormData] = useState({
    test: "",
    marks: "",
    question: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    corrAns: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.test) newErrors.test = "Test is required";
    if (!formData.marks || isNaN(formData.marks)) newErrors.marks = "Marks must be a number";
    if (!formData.question) newErrors.question = "Question is required";
    if (!formData.optionA) newErrors.optionA = "Option A is required";
    if (!formData.optionB) newErrors.optionB = "Option B is required";
    if (!formData.optionC) newErrors.optionC = "Option C is required";
    if (!formData.optionD) newErrors.optionD = "Option D is required";
    if (!formData.corrAns) newErrors.corrAns = "Correct Answer is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const newQuestion = { ...formData, id: uuidv4() };
      const updatedQuestionList = [...(JSON.parse(localStorage.getItem("questionList")) || []), newQuestion];
      localStorage.setItem("questionList", JSON.stringify(updatedQuestionList));
      setFormData({
        test: "",
        marks: "",
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        corrAns: ""
      });
      setErrors({});
      getQuestionDetails();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div>
      <FormControl sx={{ width: "500px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <SimpleDrop
              label="Test"
              options={subjects.map(subj => ({ id: subj.name, label: subj.name }))}
              name="test"
              onInputChange={handleChange}
              value={formData.test}
              style={errors.test ? { border: '2px solid red' } : {}}
            />
            {errors.test && <p style={{ color: 'red' }}>{errors.test}</p>}
          </Grid>
          <Grid item xs={6}>
            <InputBoxComponent
              label="Marks"
              type="text"
              name="marks"
              onInputChange={handleChange}
              value={formData.marks}
              style={errors.marks ? { border: '2px solid red' } : {}}
            />
            {errors.marks && <p style={{ color: 'red' }}>{errors.marks}</p>}
          </Grid>
          <Grid item xs={12}>
            <TextAreaComponent
              label="Question"
              name="question"
              onInputChange={handleChange}
              value={formData.question}
              style={errors.question ? { border: '2px solid red' } : {}}
            />
            {errors.question && <p style={{ color: 'red' }}>{errors.question}</p>}
          </Grid>
          <Grid item xs={6}>
            <InputBoxComponent
              label="Option A"
              type="text"
              name="optionA"
              onInputChange={handleChange}
              value={formData.optionA}
              style={errors.optionA ? { border: '2px solid red' } : {}}
            />
            {errors.optionA && <p style={{ color: 'red' }}>{errors.optionA}</p>}
          </Grid>
          <Grid item xs={6}>
            <InputBoxComponent
              label="Option B"
              type="text"
              name="optionB"
              onInputChange={handleChange}
              value={formData.optionB}
              style={errors.optionB ? { border: '2px solid red' } : {}}
            />
            {errors.optionB && <p style={{ color: 'red' }}>{errors.optionB}</p>}
          </Grid>
          <Grid item xs={6}>
            <InputBoxComponent
              label="Option C"
              type="text"
              name="optionC"
              onInputChange={handleChange}
              value={formData.optionC}
              style={errors.optionC ? { border: '2px solid red' } : {}}
            />
            {errors.optionC && <p style={{ color: 'red' }}>{errors.optionC}</p>}
          </Grid>
          <Grid item xs={6}>
            <InputBoxComponent
              label="Option D"
              type="text"
              name="optionD"
              onInputChange={handleChange}
              value={formData.optionD}
              style={errors.optionD ? { border: '2px solid red' } : {}}
            />
            {errors.optionD && <p style={{ color: 'red' }}>{errors.optionD}</p>}
          </Grid>
          <Grid item xs={6}>
            <InputBoxComponent
              label="Correct Ans"
              type="text"
              name="corrAns"
              onInputChange={handleChange}
              value={formData.corrAns}
              style={errors.corrAns ? { border: '2px solid red' } : {}}
            />
            {errors.corrAns && <p style={{ color: 'red' }}>{errors.corrAns}</p>}
          </Grid>
          <Grid item xs={12}>
            <ButtonComponent
              label="Submit"
              type="button"
              onclickButton={handleSubmit}
            />
          </Grid>
        </Grid>
      </FormControl>
    </div>
  );
}

export default AddQuestion;

