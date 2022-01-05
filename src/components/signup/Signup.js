import React, { useState } from 'react'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

function Signup(props) {
    const [registerData, setregisterData] = useState({
        firstname: "",
        secondname: "",
        email: "",
        password: "",
        repass: ""
    })
    const [validate, setvalidate] = useState("");
    const validateEmail = () => {
        if (registerData.email) {
            let emailregex = /^\S+@\S+$/;
            if (emailregex.test(registerData.email)) {
                setvalidate("");
                return true;
            }
            else {
                setvalidate("enter valid email");
            }
        } else {
            setvalidate("enter the email");
        }
        return false;
    };
    const validateFirstname = () => {
        if (registerData.firstname) {
            if (registerData.firstname.length >= 2 && registerData.firstname.length <= 10) {
                return true;
            }
            else {
                setvalidate("enter firstname with in range of 20 letters");
            }
        } else {
            setvalidate("enter the firstname");
        }
        return false;
    };

    const validateLastname = () => {
        if (registerData.secondname) {
            if (registerData.secondname.length >= 2 && registerData.secondname.length <= 10) {
                return true;
            }
            else {
                setvalidate("enter lasttname with in range of 20 letters");
            }
        } else {
            setvalidate("enter the lastname");
        }
        return false;
    };

    const validatePassword = () => {
        if (registerData.password) {
            var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
            if (registerData.password.match(paswd)) {
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
    const validaterePassword = () => {
        if (registerData.repass) {
            if (registerData.password === registerData.repass) {
                setvalidate("");
                return true;
            }
            else {
                setvalidate("*entered password not match with above password");
            }
        } else {
            setvalidate("*please re enter the password");
        }
        return false;
    };
    let goLogin = () => {
        props.history.push("/login")
    }
    let setData = (event) => {
        setregisterData({
            ...registerData,
            [event.target.name]: event.target.value
        })

    }
    console.log(registerData.email)
    let senduserData = () => {
        if (validateEmail() && validateFirstname() && validateLastname() && validatePassword() && validaterePassword()) {
            props.getUserdata(registerData);
            
            setregisterData({
                firstname: "",
                secondname: "",
                email: "",
                password: "",
                repass: ""

            })
        }
    }

    return (
        <div>
            <h1>Signup page</h1><br />
            <input type="text" name="firstname" value={registerData.firstname} placeholder='enter your firstname' onChange={(event) => { setData(event) }}></input><br /><br />
            <input type="text" name='secondname' value={registerData.secondname} placeholder='enter your lastname' onChange={(event) => { setData(event) }}></input><br /><br />
            <input type="email" name='email' value={registerData.email} placeholder='enter your mail id' onChange={(event) => { setData(event) }}></input><br /><br />
            <input type="password" name='password' value={registerData.password} placeholder='enter your password' onChange={(event) => { setData(event) }}></input><br /><br />
            <input type="password" name='repass' value={registerData.repass} placeholder='re-enter password' onChange={(event) => { setData(event) }}></input><br /><br />
            <div className='error'>{validate}</div>
            <button onClick={senduserData}>SignUp</button>

            <h5 onClick={goLogin} style={{ cursor: 'pointer' }}>already have an account click here to Login</h5>
        </div>
    )
}

export default withRouter(Signup)
