import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { useState } from 'react';

function App() {
  const [userData, setuserData] = useState([])
  const [loginData, setloginData] = useState([])
  console.log(userData)

  let getUserdata = (userdata)=>{
    let copyUserdata = [...userData];
    copyUserdata.push(userdata);

    setuserData(copyUserdata);
  }
  console.log(loginData)

  let getLogindata = (logindata)=>{
    let copyLogin = [...loginData];

    copyLogin.push(logindata);

    setloginData(copyLogin);
  }

  return (
    <Router>
    <div className="App ">
      <Navbar/>
      

      <Switch>
        <Route exact path="/">
          <Home registerData={userData} loginData={loginData}/>
        </Route>
        <Route exact path="/login">
          <Login getLogindata={getLogindata}/>
        </Route>
        <Route exact path="/signup" >
          <Signup getUserdata = {getUserdata}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
