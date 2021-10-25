import { useStore } from "../../store/store";

export function Result() {
  const counter = useStore((state) => state.counter);

  return <div>{counter}</div>;
}
