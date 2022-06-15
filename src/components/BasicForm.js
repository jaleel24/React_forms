import useInput from "../hooks/use-input";

//! custome hook use for firsname
const BasicForm = (props) => {
  const {
    value: name,
    hasError: nameHasError,
    isValid: nameIsValid,
    valueHandler: nameHandler,
    InputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
//! custome hook use for firsname
  const {
    value: lName,
    hasError: lNameHasError,
    isValid: lNameIsValid,
    valueHandler: LNameHandler,
    InputBlurHandler: LNameBlurHandler,
    reset: LnameReset,
  } = useInput((value) => value.trim() !== "");
//! custome hook use for Email
const {
  value: email,
  hasError: emailHasError,
  isValid: emailIsValid,
  valueHandler: emailHandler,
  InputBlurHandler: emailBlurHandler,
  reset: emailReset,
} = useInput((value) => value.trim() !== "" && value.includes('@'));

  //! form Handler Function
  const formSubmitHandler = (event) => {
    event.preventDefault();

    // if (!nameIsValid && nameHasError ) {
    //   return;
    // }
    // if(!lNameIsValid && lNameHasError){
    //   return
    // }
    // if(!emailIsValid && emailHasError){
    //   return
    // }
    if(!formIsValid){
      return
    }
    console.log('Submitted');
    console.log(name,lName,email);
    nameReset();
    LnameReset();
    emailReset();
  };

  let formIsValid = false;

  if (nameIsValid && lNameIsValid && emailIsValid){
    formIsValid = true;
  }
    let nameClassHandler = nameHasError ? 'form-control invalid' : 'form-control';
    let lnameClassHandler = lNameHasError ? 'form-control invalid' : 'form-control';
    let emailClassHandler = emailHasError ? 'form-control invalid' : 'form-control';
 
 
    return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        
        <div className={nameClassHandler}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={name} onChange={nameHandler} onBlur={nameBlurHandler} />
          {nameHasError && <p className="error-text">please enter a valid name</p>}
        </div>
       
        
        <div className={lnameClassHandler}>
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={lName} onChange={LNameHandler} onBlur={LNameBlurHandler}/>
          {lNameHasError && <p className="error-text">please enter a valid Last name</p>}
        </div>
      
      </div>
      <div className={emailClassHandler}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="email" id="name"  value={email} onChange={emailHandler} onBlur={emailBlurHandler}/>
        {emailHasError && <p className="error-text">please enter a valid Last name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
