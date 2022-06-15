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

  //! form Handler Function
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid && nameHasError ) {
      return;
    }
    if(lNameIsValid && lNameHasError){
      return
    }

    nameReset();
    LnameReset();
  };

    let nameClassHandler = nameHasError ? 'form-control invalid' : 'form-control';
 
 
    return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        
        <div className={nameClassHandler}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={name} onChange={nameHandler} onBlur={nameBlurHandler} />
        </div>
        {nameHasError && <p className="error-text">please enter a valid name</p>}
        
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" value={lName} onChange={LNameHandler} onBlur={LNameBlurHandler}/>
        </div>
        {lNameHasError && <p className="error-text">please enter a valid Last name</p>}
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="email" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
