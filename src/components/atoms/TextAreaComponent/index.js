import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextAreaComponent({label="", name="", onInputChange}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '54ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" name={name} onChange={onInputChange}/>
    </Box>
  );
}
