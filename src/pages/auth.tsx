import React, { useState } from 'react';
import { pagesPath } from '../lib/$path';
import { useRouter } from 'next/router';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { push } = useRouter();

  const onButtonClick = () => {
    setEmailError('');
    setPasswordError('');

    if ('' === email) {
      setEmailError('Please enter your email');
      return;
    }

    if (!/^testLogin22$/.test(email)) {
      setEmailError('Please enter a valid login');
      return;
    }

    if ('' === password) {
      setPasswordError('Please enter a password');
      return;
    }

    if (password.length < 12) {
      setPasswordError('The password must be 8 characters or longer');
      return;
    }
    if (!/^s#dDA23@44#Ds$/.test(password)) {
      setPasswordError('Please enter a valid password');
      return;
    }
    push(pagesPath.data.$url().pathname);
  };

  return (
    <div className={'w-full flex flex-col h-[100vh]'}>
      <div
        className={
          'flex flex-col w-full justify-center items-center h-full bg-blackPrimary'
        }
      >
        <div className={'flex flex-col'}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={'rounded-2xl py-2 px-3 border-none '}
          />
        </div>
        <div className={'flex flex-col mt-[15px] '}>
          <input
            value={password}
            type={'password'}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'rounded-2xl py-2 px-3 border-none '}
          />
        </div>
        <div className={'flex flex-col mt-[15px]'}>
          <button
            className={'px-20 py-2 bg-violet-600 border-none rounded-2xl'}
            type="submit"
            onClick={onButtonClick}
            value={'Log in'}
          >
            Log in
          </button>
        </div>
        <label className="py-[20px] h-[40px] text-[#FF3333]">
          {passwordError || emailError}
        </label>
      </div>
    </div>
  );
};

export default Auth;
