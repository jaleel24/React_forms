import { useState } from "react";
const SimpleInput = (props) => {
  // storing data by using useref
  // useref is better when u only want the input in the end
//const NameinputRef = useRef();

  //! storing/fetching data by using use state
  //! useState is better when u want to validate the user input on every key stroke
  //! it is better when u want to reset the input ,
  //! useState is better
  const [enteredName, setEnteredname] = useState("");
  const [enteredEmail, setEmail] = useState('');
  const [inputIsTouched, setIsInputTouched] = useState(false);
  const [EmailInputIsTouched, setEmailIsInputTouched] = useState(false);
 

  const nameIsValid = enteredName.trim() !== '';
  const emailIsvalid = enteredEmail.trim() !== '' && enteredEmail.includes('@');
  const nameInputIsInvalid = !nameIsValid && inputIsTouched;
  const emailInputIsInvalid = !emailIsvalid && EmailInputIsTouched;
  
  let formIsValid = false;

  if(nameIsValid && emailIsvalid){
    formIsValid=true;
  }
  const NameHandler = (event) => {
    setEnteredname(event.target.value);
  };

  const nameInputBlurHandler = ()=>{
    setIsInputTouched(true);

  }
  const emailHandler = (event)=>{
    setEmail(event.target.value);
  }
  const emailInputBlurHandler = ()=>{
    setEmailIsInputTouched(true);

  }
  const submitNameHandler = (event) => {
    event.preventDefault();
    setIsInputTouched(true);
    setEmailIsInputTouched(true);
    //!const enteredValue = NameinputRef.current.value;
    //!NameinputRef.current.value = ''  NOT IDEAL, DONT MANUPULATE THE DOM DIRECTLY, LEAVE IT TO REACT
    if(!nameIsValid && !emailIsvalid){
      return;
    }
    setEnteredname('');
    setEmail('');
    setIsInputTouched(false);
    setEmailIsInputTouched(false);
  };
  
  const classHandler = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailclassHandler = emailInputIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={submitNameHandler}>
      <div className={classHandler}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={NameinputRef}
          type="text"
          id="name"
          onChange={NameHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
       {nameInputIsInvalid && <p className="error-text">Please enter Something, Name Field cannot be empty </p>}
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
       {emailInputIsInvalid && <p className="error-text"> Please enter a Valid email </p>}
      </div>
      
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    
    </form>
  );
};

export default SimpleInput;
