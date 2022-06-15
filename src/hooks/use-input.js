import { useState } from "react";

//! hooks are always generic
// we can expect a function as an argument to this custom hook function
const useInput = (validateValue)=>{

    const [enteredValue, setEnteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const InputBlurHandler = ()=>{
    setIsTouched(true);

  }

  const reset = ()=>{
    setEnteredValue('');
    setIsTouched(false);
  }
  return {

    value:enteredValue,
    hasError:hasError,
    isValid:valueIsValid,
    valueHandler,
    InputBlurHandler,
    reset

  }

}
export default useInput;