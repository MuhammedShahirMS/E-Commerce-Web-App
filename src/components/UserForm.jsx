import { useRef } from "react";
import classes from './UserForm.module.css';

const UserForm = props => {

const emailIdInput  = useRef();
const passWordInput = useRef();
const userNameInput = useRef();

const authenticate = (e) => {
    e.preventDefault();
    const email = emailIdInput.current.value;
    const passWord = passWordInput.current.value;
    let userName = '';
    if(userNameInput.current){
    userName = userNameInput.current.value;
    }
    props.authHandleFn(e, email, passWord, userName);
}

let form;

if(props.type === 'signIn') {
    form = <><form>
        <h2>Please Login:</h2>
        <label htmlFor="emailId">e-mail id:</label>
        <input id="emailId" ref={emailIdInput}/>
        <label htmlFor="passWord">Password:</label>
        <input id="passWord" ref={passWordInput}/>
        <button id="login" onClick={authenticate}>Login</button>
        </form>
        <div className={classes.signup}>
        <p>No Account ?</p>
        <button onClick={props.signUpNeededHandleFn}> Signup </button>
        </div>
        <button className={classes.close} onClick={props.closeHandleFn}>Close</button>
        </>
}
    

else {
    form = <><form className={classes.form}>
    <h2>Signup:</h2>
    <label htmlFor="emailId">e-mail id:</label>
    <input id="emailId" ref={emailIdInput}/>
    <label htmlFor="passWord">Enter Password:</label>
    <input id="passWord" ref={passWordInput}/>
    <label htmlFor="displayName">Enter Name:</label>
    <input id="displayName" ref={userNameInput}/>
    </form>
    <div className={classes.actionBtns}>
    <button className={classes.signupBtn} id="signup" onClick={authenticate}>Sign up</button>
    <button  onClick={props.closeHandleFn}>Close</button>
    </div>
</>
    }
   
        return (
            <>
            {form}
            </>
        )

    }

export default UserForm;