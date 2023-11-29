import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { months } from '@/src/lib/months';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Required'),
  amount: Yup.number().required('Required'),
  month: Yup.string().required('Required'),
});

const InputForm = () => {
  const { values, handleChange, handleBlur, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        type: '',
        category: '',
        amount: '',
        month: '',
      },
      validationSchema,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '' || /^[0-9\b]+$/.test(event.target.value)) {
      handleChange(event);
    }
  };

  return (
    <form
      className={'flex w-full flex-col h-full max-w-[700px] justify-center '}
      onSubmit={handleSubmit}
    >
      <InputLabel className={'w-full flex'} id="type-label">
        Income/Waste
      </InputLabel>
      <Select
        className={'w-full'}
        labelId="type-label"
        label="Value"
        name={'type'}
        value={values.type}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.type && Boolean(errors.type)}
        // helperText={touched.type && errors.type} // TODO
      >
        <MenuItem value={'Waste'}>Waste</MenuItem>
        <MenuItem value={'Income'}>Income</MenuItem>
      </Select>

      {values.type === 'Waste' ? (
        <Select
          className={'w-full'}
          value={values.category}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.category && Boolean(errors.category)}
          label="Category"
          name={'category'}
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

      <Select
        className={'w-full mb-3'}
        labelId="type-label"
        label="Month"
        name={'month'}
        value={values.month}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.month && Boolean(errors.month)}
        // helperText={touched.type && errors.type} // TODO
      >
        {months.map((month) => (
          <MenuItem value={month}>{month}</MenuItem>
        ))}
      </Select>
      <TextField
        name={'amount'}
        value={values.amount}
        onChange={handleAmountChange}
        onBlur={handleBlur}
        error={touched.amount && Boolean(errors.amount)}
        helperText={touched.amount && errors.amount}
        label={'Amount'}
        placeholder={'Money Amount'}
        className={'bg-blackPrimary border-[#000] border'}
      />

      <Button type={'submit'}>Submit</Button>
    </form>
  );
};
export default InputForm;
