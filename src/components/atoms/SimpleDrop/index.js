/*import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SimpleDrop({
  label = "",
  name,
  options=[],
  onInputChange
}) {
  const [age, setAge] = React.useState("");

 const handleChange = (event) =>{
  onInputChange(event)
  setAge(event.target.value);
 };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "25ch" }}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          name={name}
          label={label}
          onChange={(e)=>{
            handleChange(e);
          }}>
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          {options.map((element) => (
            <MenuItem value={element.id}>{element.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}*/


import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SimpleDrop({
  label = "",
  name,
  options = [],
  value = "",
  onInputChange,
  error = false,
  helperText = ""
}) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: "25ch" }} error={error}>
        <InputLabel id={`${name}-label`}>{label}</InputLabel>
        <Select
          labelId={`${name}-label`}
          id={`${name}-select`}
          value={value}
          name={name}
          label={label}
          onChange={onInputChange}
        >
          <MenuItem value="">
            <em>Select Option</em>
          </MenuItem>
          {options.map((element) => (
            <MenuItem key={element.id} value={element.id}>
              {element.label}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </div>
  );
}
