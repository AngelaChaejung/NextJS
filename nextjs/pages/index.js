import { useState } from "react";
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      hi!{counter}
      <button onClick={() => setCounter((prev) => prev + 1)}> +</button>
    </div>
  );
}
