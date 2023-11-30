import React from 'react';
import Layout from '@/src/components/Layout';
import { useStore } from '@/src/store';
import { getSnapshot } from 'mobx-state-tree';
import { Box, Typography } from '@mui/material';

const Result = () => {
  const { reports } = useStore(null);
  const reportsData = getSnapshot(reports);
  return (
    <Layout>
      {reportsData.map((elem) => (
        <Box key={elem.month + elem.type} sx={{ display: 'flex' }}>
          <Typography sx={{ m: 2 }}>{elem.type}</Typography>
          <Typography sx={{ m: 2 }}>{elem.amount}</Typography>
          <Typography sx={{ m: 2 }}>{elem.month}</Typography>
        </Box>
      ))}
    </Layout>
  );
};

export default Result;
