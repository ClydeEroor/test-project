import {
  applySnapshot,
  Instance,
  SnapshotIn,
  SnapshotOut,
  types,
} from 'mobx-state-tree';
import { ReportType } from '@/src/lib/types';
import { useMemo } from 'react';
import persist from 'mst-persist';

const Report = types.model({
  month: types.string,
  amount: types.string,
  category: types.optional(types.string, ''),
  type: types.string,
});

const Store = types
  .model({
    reports: types.array(Report),
  })
  .actions((self) => ({
    addReport({ month, amount, category, type }: ReportType) {
      self.reports.push({ month, amount, category, type });
    },
  }));

export type IStore = Instance<typeof Store>;
export type IStoreSnapshotIn = SnapshotIn<typeof Store>;
export type IStoreSnapshotOut = SnapshotOut<typeof Store>;

let store: IStore | undefined;
const initialState = { reports: [] };
export function initializeStore(snapshot = null) {
  const _store = store ?? Store.create(initialState);

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.tsx` and `pages/ssr.tsx` for more details
  if (snapshot) {
    applySnapshot(_store, snapshot);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client

  if (!store) store = _store;
  persist('store', store).then(() =>
    console.log('someStore has been hydrated'),
  );
  return store;
}

export function useStore(initialState: any) {
  return useMemo(() => initializeStore(initialState), [initialState]);
}
