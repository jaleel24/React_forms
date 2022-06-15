//import { useState } from "react";

import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  //? useInput is a custom hook so now we will pull out the values which it returns by destructuring
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueHandler: valueChangeHandler,
    InputBlurHandler: inputBlurHandler,
    reset: resetData,
  } = useInput((value) => value.trim() !== "");

  // using the custom hook for the email

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueHandler: emailChangeHandler,
    InputBlurHandler: emailinputBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  //! storing/fetching data by using use state
  //! useState is better when u want to validate the user input on every key stroke
  //! it is better when u want to reset the input ,
  //! useState is better
  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitNameHandler = (event) => {
    event.preventDefault();
    //!const enteredValue = NameinputRef.current.value;
    //!NameinputRef.current.value = ''  NOT IDEAL, DONT MANUPULATE THE DOM DIRECTLY, LEAVE IT TO REACT
    if (!nameIsValid && !emailIsValid) {
      return;
    }
    resetData();
    resetEmail();
  };

  const classHandler = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  const emailclassHandler = emailInputHasError
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
          onChange={emailChangeHandler}
          onBlur={emailinputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
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
