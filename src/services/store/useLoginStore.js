import { create } from 'zustand'
import { instance } from '../api';

export const useLoginStore = create((set) => ({
  token: null,
  status: null,
  error: false,
  loading: false,

  auth: async (body) => {
    try {
      set({ token: null, status: null, error: false, loading: true });
      const { data, status } = await instance.post(`/auth/login`,
        body
      );

      set({ token: data?.access_token, status: status, error: false, loading: false });

      return { token: data?.access_token, status: status }

    } catch ({ error, status }) {
      set({ token: null, status: status, error: true, loading: false });
      console.error(error);
    }
  },
}))