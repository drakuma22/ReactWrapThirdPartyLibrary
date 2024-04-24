import { useState } from "react";

interface Prop {
  value: number;
}

const Increment = ({ value }: Prop) => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount((prevState) => prevState + value);
    setCount((prevState) => prevState + value);
  };

  return (
    <div>
      <button onClick={incrementCount}>{count}</button>
    </div>
  );
};

export default Increment;
