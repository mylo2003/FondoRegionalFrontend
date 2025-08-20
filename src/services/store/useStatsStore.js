import { create } from "zustand";
import { instance } from "../api";

export const useStatsStore = create((set) => ({
  views: 0,
  downloads: 0,
  error: false,
  loading: false,

  getStats: async () => {
    try {
      set({ views: 0, downloads: 0, error: false, loading: true });
      const { data } = await instance.get("/estadisticas");
      set({
        views: data?.vistas,
        downloads: data?.descargas,
        error: false,
        loading: false,
      });
    } catch (error) {
      set({ views: 0, downloads: 0, error: true, loading: false });
      console.error(error);
    }
  },

  addView: async () => {
    try {
      set({ error: false, loading: true });
      await instance.get("/estadisticas/vista");
      set({ error: false, loading: false });
    } catch (error) {
      console.error(error);
      set({ error: true, loading: false });
    }
  },

  addDownload: async () => {
    try {
      set({ error: false, loading: true });
      await instance.get("/estadisticas/descarga");
      set({ error: false, loading: false });
    } catch (error) {
      console.error(error);
      set({ error: true, loading: false });
    }
  },
}));
