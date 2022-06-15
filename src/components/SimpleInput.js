import { useState } from "react";

import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  //? useInput is a custom hook so now we will pull out the values which it returns by destructuring

  const {
    value: enteredName,
    isValid:nameIsValid,
    hasError: nameInputHasError,
    valueHandler: valueChangeHandler,
    InputBlurHandler: inputBlurHandler,
    reset:resetData
  } = useInput((value) => value.trim() !== "");

  //! storing/fetching data by using use state
  //! useState is better when u want to validate the user input on every key stroke
  //! it is better when u want to reset the input ,
  //! useState is better

  const [enteredEmail, setEmail] = useState("");
  const [EmailInputIsTouched, setEmailIsInputTouched] = useState(false);

  const emailIsvalid = enteredEmail.trim() !== "" && enteredEmail.includes("@");
  const emailInputIsInvalid = !emailIsvalid && EmailInputIsTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsvalid) {
    formIsValid = true;
  }
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const emailInputBlurHandler = () => {
    setEmailIsInputTouched(true);
  };
  const submitNameHandler = (event) => {
    event.preventDefault();

    setEmailIsInputTouched(true);
    //!const enteredValue = NameinputRef.current.value;
    //!NameinputRef.current.value = ''  NOT IDEAL, DONT MANUPULATE THE DOM DIRECTLY, LEAVE IT TO REACT
    if (!nameIsValid && !emailIsvalid) {
      return;
    }
    resetData();
    setEmail("");
    setEmailIsInputTouched(false);
  };

  const classHandler = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailclassHandler = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitNameHandler}>
      <div className={classHandler}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={NameinputRef}
          type="text"
          id="name"
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">
            Please enter Something, Name Field cannot be empty{" "}
          </p>
        )}
      </div>

      <div className={emailclassHandler}>
        <label htmlFor="name">Your Email</label>
        <input
          // ref={NameinputRef}
          type="email"
          id="email"
          onChange={emailHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text"> Please enter a Valid email </p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
