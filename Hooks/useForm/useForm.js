import { useState } from "react";

export const useForm = (inicialState = {}) => {
   const [values, setvalues] = useState(inicialState);
   const reset = () => {
      setvalues(inicialState);
   };
   const handleInputChange = ({ target }) => {
      setvalues({
         ...values,
         [target.name]: target.value,
      });
   };

   return [values, handleInputChange, reset];
};
