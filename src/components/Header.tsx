import React from 'react';
import { pagesPath } from '@/src/lib/$path';
import Link from 'next/link';

const Header = () => {
  const { data, developer, instructions, result } = pagesPath;

  const navigation = [
    { pageName: 'Data', path: data.$url().pathname },
    { pageName: 'Result', path: result.$url().pathname },
    { pageName: 'Instructions', path: instructions.$url().pathname },
    { pageName: 'Developer', path: developer.$url().pathname },
  ];

  const handleLogOut = () => {
    console.log('this button for logOut');
  };

  return (
    <header className={'flex w-full bg-[#5423E7] justify-between px-20 py-7'}>
      <div className={'flex gap-20 justify-center items-center'}>
        {navigation.map((elem, idx) => {
          return (
            <Link
              className={'text-[20px] text-white text-cyan-300'}
              key={`link-item-${idx}`}
              href={`${elem.path}`}
            >
              {elem.pageName}
            </Link>
          );
        })}
      </div>
      <button
        className={
          'px-10 py-2 text-[20px] rounded-2xl bg-[#fff] border-none items-center'
        }
        type={'submit'}
        onClick={handleLogOut}
      >
        Log out
      </button>
    </header>
  );
};

export default Header;
