interface ICounterSlice {
  counter: number;
  increment: () => void;
  decrement: () => void;
}
export const counterSlice = (set: any, get: any) => ({
  counter: 0,
  increment: () =>
    set((state: ICounterSlice) => ({ counter: state.counter + 1 })),
  decrement: () =>
    set((state: ICounterSlice) => ({ counter: state.counter - 1 })),
});
