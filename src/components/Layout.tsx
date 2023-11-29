import React, { ReactNode } from 'react';
import Header from '@/src/components/Header';

const Layout = ({ children }: { children?: ReactNode }) => {
  return (
    <div className={'w-full h-[100vh] bg-blackPrimary'}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
