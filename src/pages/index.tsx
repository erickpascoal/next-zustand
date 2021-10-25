import type { NextPage } from "next";
import { useCallback } from "react";
import { Result } from "../components/Result";
import { useStore } from "../store/store";

const Home: NextPage = () => {
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div>
      <Result />
      <button type="button" onClick={decrement}>
        -
      </button>

      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Home;
