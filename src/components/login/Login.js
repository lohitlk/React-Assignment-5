import React, { useState } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'

function Login(props) {
    const [loginData, setloginData] = useState({
        email: "",
        password: ""
    })
    const [validate, setvalidate] = useState("")
    const validateEmail = () => {
        if (loginData.email) {
            let emailregex = /^\S+@\S+$/;
            if (emailregex.test(loginData.email)) {
                setvalidate("");
                return true;
            }
            else {
                setvalidate("*enter valid email");
            }
        } else {
            setvalidate("*enter the email");
        }
        return false;
    };
    const validatePassword = () => {
        if (loginData.password) {
            var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
            if (loginData.password.match(paswd)) {
                setvalidate("");
                return true;
            }
            else {
                setvalidate("*enter valid password");
            }
        } else {
            setvalidate("*enter password");
        }
        return false;
    };
    let goSignup = () => {
        props.history.push("/Signup")
    }
    let changeData = (event) => {
        setloginData({
            ...loginData,
            [event.target.name]: event.target.value
        })

    }
    let sendLogin = () => {
        if (validateEmail() && validatePassword()) {
            props.getLogindata(loginData);
            setloginData({
                email: "",
                password: ""
            })
        }
    }
    return (
        <div>
            <h1>Login</h1><br />
            <input type="text" name='email' value={loginData.email} placeholder='enter your mail id' onChange={(event) => { changeData(event) }} /><br /><br />
            <input type="password" name='password' value={loginData.password} placeholder='enter your password' onChange={(event) => { changeData(event) }} /><br /><br /><br />
            <div className='error'>{validate}</div>
            <button onClick={sendLogin}>Login</button>
            <h5 onClick={goSignup} style={{ cursor: 'pointer' }}>Don't have account click here to signup</h5>
        </div>
    )
}

export default withRouter(Login) 
