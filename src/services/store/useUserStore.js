import { create } from "zustand";
import { instance } from "../api";

export const useUserStore = create((set) => ({
  users: [],
  error: false,
  loading: false,

  getUsers: async () => {
    try {
      const token = localStorage.getItem("token");

      set({ users: [], error: false, loading: true });
      const { data } = await instance.get("/usuarios", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({
        users: data,
        error: false,
        loading: false,
      });

      console.log(data);
    } catch (error) {
      set({ users: [], error: true, loading: false });
      console.error(error);
    }
  },

  createUser: async (body) => {
    try {
      const token = localStorage.getItem("token");

      set({ error: false, loading: true });

      await instance.post(`/usuarios`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ error: false, loading: false });
    } catch (error) {
      set({ error: true, loading: false });
      console.error(error);
    }
  },

  deleteUser: async (id) => {
    try {
      const token = localStorage.getItem("token");

      set({ error: false, loading: true });

      await instance.delete(`/usuarios/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      set({ error: false, loading: false });

      console.log(data);
    } catch (error) {
      set({ error: true, loading: false });
      console.error(error);
    }
  },
}));
