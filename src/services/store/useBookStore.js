import { create } from 'zustand'
import { instance } from '../api';

export const useBookStore = create((set) => ({
  books: [],
  totalpages: 0,
  totalElements: 0,
  error: false,
  loading: false,

  getBooks: async (size, page) => {
    try {
      set({ books: [], totalpages: 0, error: false, loading: true });
      const response = await instance.get(`/fondo-regional?size=${size}&page=${page}`);
      console.log(response);
      set({ 
          books: response?.data?.content, 
          totalpages: response?.data?.totalPages, 
          totalElements: response?.data?.totalElements,
          error: false, 
          loading: false 
      });
    } catch (error) {
      set({ books: [], totalpages: 0, totalElements: 0, error: true, loading: false });
      console.error(error);
    }
  },

  getFilterBooks: async (query, size, page) => {
    try {
      set({ books: [], totalpages: 0, error: false, loading: true });
      const response = await instance.get(`/fondo-regional/filtro?search=${query}&size=${size}&page=${page}`);
      console.log(response);
      set({ 
          books: response?.data?.content, 
          totalpages: response?.data?.totalPages,
          error: false, 
          loading: false 
      });
    } catch (error) {
      set({ books: [], totalpages: 0, error: true, loading: false });
      console.error(error);
    }
  },
}))