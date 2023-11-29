import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Store {
  user: string | null;
  balance: number;
  setUser: (user: string | null) => void;
  addToBalance: (amount: number) => void;
}

export const useStore = create(
  persist<Store>(
    (set) => ({
      user: "John",
      balance: 0,
      setUser: (user) => {
        set(() => ({ user }));
      },
      addToBalance: (amount) => {
        set((state) => ({ balance: state.balance + amount }));
      },
    }),
    {
      name: "app-shell",
    }
  )
);
