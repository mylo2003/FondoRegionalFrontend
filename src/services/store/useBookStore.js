import { create } from "zustand";
import { instance } from "../api";

export const useBookStore = create((set) => ({
  books: [],
  totalpages: 0,
  totalElements: 0,
  error: false,
  loading: false,

  getBooks: async (size, page) => {
    try {
      set({ books: [], totalpages: 0, error: false, loading: true });
      const { data } = await instance.get(`/libros?size=${size}&page=${page}`);
      set({
        books: data?.content,
        totalpages: data?.totalPages,
        totalElements: data?.totalElements,
        error: false,
        loading: false,
      });
    } catch (error) {
      set({
        books: [],
        totalpages: 0,
        totalElements: 0,
        error: true,
        loading: false,
      });
      console.error(error);
    }
  },

  getFilterBooks: async (query, size, page) => {
    try {
      set({ books: [], totalpages: 0, error: false, loading: true });
      const { data } = await instance.get(
        `/libros/filtro?search=${query}&size=${size}&page=${page}`
      );
      set({
        books: data?.content,
        totalpages: data?.totalPages,
        error: false,
        loading: false,
      });
    } catch (error) {
      set({ books: [], totalpages: 0, error: true, loading: false });
      console.error(error);
    }
  },
}));
