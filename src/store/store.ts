import create from "zustand";
import { counterSlice } from "./slices/counterSlice";

export const useStore = create((set, get) => ({
  ...counterSlice(set, get),
}));
