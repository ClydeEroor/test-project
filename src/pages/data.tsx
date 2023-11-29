import React, { useEffect, useState } from 'react';
import Layout from '@/src/components/Layout';
import InputForm from '@/src/components/InputForm';
import axios from 'axios';

type CurrencyProp = {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: Date;
};

const Data = () => {
  const [currency, setCurrency] = useState<CurrencyProp[] | []>([]);
  const handleData = async () => {
    try {
      const res = await axios.get(
        'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
      );
      setCurrency(
        await res.data.filter(
          (elem: CurrencyProp) => elem.cc === 'USD' || elem.cc === 'EUR',
        ),
      );

      console.log(currency);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Layout>
      <div className={'flex w-full mt-[200px] justify-center'}>
        <InputForm />
      </div>
    </Layout>
  );
};

export default Data;
