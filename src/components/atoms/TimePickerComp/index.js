import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerComp({label="", onInputChange}) {
  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      
        <TimePicker
          label={label}
          sx={{width:"25ch"}}
          defaultValue={dayjs('2022-04-17T15:30')}
          onChange={onInputChange}
        />
        
    </LocalizationProvider>
  );
}         