import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { pagesPath } from '@/src/lib/$path';
import { useRouter } from 'next/router';
export type User = {
  id: string;
  name: string;
  email: string;
  authToken?: string;
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const { setItem, removeItem, getItem } = useLocalStorage();
  const addUser = (user: User) => {
    setUser(user);
    setItem('user', JSON.stringify(user));
  };

  const removeUser = () => {
    setUser(null);
    removeItem('user');
  };
  const { push } = useRouter();

  useEffect(() => {
    const root = getItem('user');
    if (root) {
      setUser(JSON.parse(root));
    } else {
      push(pagesPath.auth.$url().pathname);
    }
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };
  return { user, login, logout, setUser };
};
