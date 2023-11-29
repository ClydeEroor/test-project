import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';

const InputForm = () => {
  const [selectValue, setSelectValue] = React.useState('');
  const [date, setDate] = useState<Date>();
  const [category, setCategory] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectValue(event.target.value);
  };
  const handleCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    console.log(date?.$d);
  }, [date]);

  return (
    <div
      className={
        'flex w-full flex-col h-full  items-center max-w-[700px] justify-center '
      }
    >
      <FormControl className={'flex w-full flex-col'} variant="standard">
        <InputLabel
          className={'w-full flex'}
          id="demo-simple-select-standard-label"
        >
          Income/Waste
        </InputLabel>
        <Select
          className={'w-[150px]'}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectValue}
          onChange={handleChange}
          label="Value"
        >
          <MenuItem value={'Waste'}>Waste</MenuItem>
          <MenuItem value={'Income'}>Income</MenuItem>
        </Select>

        {selectValue === 'Waste' ? (
          <Select
            className={'w-[150px]'}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={category}
            onChange={handleCategory}
            label="Category"
          >
            <MenuItem value={'Home'}>Home</MenuItem>
            <MenuItem value={'Family'}>Family</MenuItem>
            <MenuItem value={'Food'}>Food</MenuItem>
            <MenuItem value={'Sport'}>Sport</MenuItem>
            <MenuItem value={'Education'}>Education</MenuItem>
            <MenuItem value={'Health'}>Health</MenuItem>
            <MenuItem value={'Gifts'}>Gifts</MenuItem>
            <MenuItem value={'Transport'}>Transport</MenuItem>
          </Select>
        ) : null}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            onChange={(event) => setDate(event)}
            label="Basic date picker"
          />
        </LocalizationProvider>
        <TextField
          placeholder={'value'}
          className={'bg-blackPrimary border-[#000] border'}
          type="text"
        />
      </FormControl>

      <Button type={'submit'}>Submit</Button>
    </div>
  );
};
export default InputForm;
