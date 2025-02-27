import { userWithId } from "@/type/types";
import { create } from "zustand";

type TCounter = {
  count: number;
  inc: () => void;
};

type TUsers = {
  users: userWithId[] | null;
  addUsers: (users: userWithId[] | null) => void;
};

// Tes Increment Angka
export const useCounter = create<TCounter>()((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

// Menerima Semua User
export const usersState = create<TUsers>()((set) => ({
  users: null,
  addUsers: (users) => set(() => ({ users })),
}));
