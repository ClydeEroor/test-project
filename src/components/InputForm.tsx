import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { months } from '@/src/lib/months';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '@/src/store';

const validationSchema = Yup.object().shape({
  type: Yup.string().required('Required'),
  amount: Yup.number().required('Required'),
  month: Yup.string().required('Required'),
});

type ListProp = {
  type: string;
  category?: string;
  amount: string;
  month: string;
};

const InputForm = observer(() => {
  const { addReport } = useStore(null);
  const [list, setList] = useState<ListProp[]>([]);

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      type: '',
      category: '',
      amount: '',
      month: '',
    },
    validationSchema,
    onSubmit: (values) => {
      setList((prevList) => [...prevList, values]);
      addReport(values);
      resetForm();
    },
  });

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '' || /^[0-9\b]+$/.test(event.target.value)) {
      handleChange(event);
    }
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <form
      className={
        'flex w-full flex-col h-full gap-5 max-w-[700px] justify-center '
      }
      onSubmit={handleSubmit}
    >
      <InputLabel className={'w-full flex'} id="type-label">
        Income/Waste
      </InputLabel>
      <Select
        className={'w-full'}
        labelId="type-label"
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
        <>
          <InputLabel className={'w-full flex'} id="type-label">
            Category
          </InputLabel>
          <Select
            className={'w-full'}
            value={values.category}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.category && Boolean(errors.category)}
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
        </>
      ) : null}
      <InputLabel className={'w-full flex'} id="type-label">
        Month
      </InputLabel>
      <Select
        className={'w-full'}
        labelId="type-label"
        name={'month'}
        value={values.month}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.month && Boolean(errors.month)}
        // helperText={touched.type && errors.type}
      >
        {months.map((month, idx) => (
          <MenuItem key={`month-select-${idx}`} value={month}>
            {month}
          </MenuItem>
        ))}
      </Select>
      <InputLabel className={'w-full flex'} id="type-label">
        Amount
      </InputLabel>
      <TextField
        name={'amount'}
        value={values.amount}
        onChange={handleAmountChange}
        onBlur={handleBlur}
        error={touched.amount && Boolean(errors.amount)}
        helperText={touched.amount && errors.amount}
        placeholder={'Money Amount'}
        className={' border border-black'}
      />
      <Button className={'bg-white mt-[20px]'} type={'submit'}>
        Submit
      </Button>
    </form>
  );
});
export default InputForm;
