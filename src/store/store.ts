import { create } from "zustand";

type UserStore = {
  status: boolean;
  user: object;
  login: (user: object) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  status: false,
  user: {},
  login: (user) => set({ status: true, user: user }),
  logout: () => set({ status: false, user: {} }),
}));
