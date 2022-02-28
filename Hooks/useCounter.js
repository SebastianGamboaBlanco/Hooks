import { useState } from "react";

export const useCounter = (inicialState = 10) => {
   const [first, setfirst] = useState(inicialState);

   const increment = () => setfirst(first + 1);
   const decrement = () => setfirst(first - 1);
   const reset = () => setfirst(inicialState);

   return {
      first,
      increment,
      decrement,
      reset,
   };
};
