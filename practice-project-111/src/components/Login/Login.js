import React, { useState, useReducer, useEffect, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import AuthContext from "../store/auth-context";

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_PASSWORD_ENTERED") {
    //console.log("inside useReducer - USER_PASSWORD_ENTERED ");
    return {
      val: action.payloadVal,
      isValid: action.payloadVal.trim().length > 1,
    };
  }

  if (action.type === "USER_PASSWORD_VALIDATE_BLUR") {
    //console.log("inside useReducer - USER_PASSWORD_VALIDATE");
    //console.log(prevState.val);
    return { val: prevState.val, isValid: prevState.val.trim().length > 1 };
  }

  return { val: "", isValid: null };
};

const Login = () => {
  const authCtx = useContext(AuthContext);

  const [userPasswordReducerState, dispatchUserPasswordFn] = useReducer(
    passwordReducer,
    { val: "", isValid: null }
  );

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  //Use Object Desturture Alias technique
  const { isValid: isPasswordValid } = userPasswordReducerState;
  console.log("isPasswordValid -- " + isPasswordValid);

  useEffect(() => {
    const timerIdentifier = setTimeout(() => {
      console.log("Inside use effect - Login Form");

      setFormIsValid(enteredEmail.includes("@") && isPasswordValid);
    }, 3000);

    return () => {
      console.log("Inside clean up - use effect");
      clearTimeout(timerIdentifier);
    };
  }, [enteredEmail, isPasswordValid]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && userPasswordReducerState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    //setEnteredPassword(event.target.value);

    setFormIsValid(
      enteredEmail.includes("@") && userPasswordReducerState.isValid
    );

    dispatchUserPasswordFn({
      type: "USER_PASSWORD_ENTERED",
      payloadVal: event.target.value,
    });
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(userPasswordReducerState.isValid);
    dispatchUserPasswordFn({ type: "USER_PASSWORD_VALIDATE_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(enteredEmail, userPasswordReducerState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/* <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        <Input
          type="email"
          id="email"
          label="E-Mail"
          isInputValid={emailIsValid}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        {/* <div
          className={`${classes.control} ${
            userPasswordReducerState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userPasswordReducerState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          /> 
        </div>*/}
        <Input
          type="password"
          id="password"
          label="Password"
          isInputValid={userPasswordReducerState.isValid}
          value={userPasswordReducerState.val}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
