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
  return {

    value:enteredValue,
    hasError:hasError,
    valueHandler,
    InputBlurHandler

  }

}
export default useInput;