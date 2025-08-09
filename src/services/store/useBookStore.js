import { create } from 'zustand'
import { instance } from '../api';

export const useBookStore = create((set) => ({
  book: null, 
  books: [],
  error: false,
  loading: false,

  getBooks: async (size, page) => {
    try {
      set({ books: [], error: false, loading: true })
      const response = await instance.get(`/fondo-regional?size=${size}&page=${page}`);
      console.log(response);
      set({ books: response?.data?.content, error: false, loading: false });
    } catch (error) {
      set({ books: [], error: true, loading: false });
      console.error(error);
    }
  },
}))