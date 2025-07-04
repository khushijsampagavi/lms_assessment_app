import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioBtnComponent({ label = "", formcontrols = [] }) {
  return (
    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="disabled"
        name="radio-buttons-group"
      >
        {formcontrols.map((element) => (
          <FormControlLabel value={element} control={<Radio />} label={element} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
