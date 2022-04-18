import React, { useState, useContext} from "react";
import { Link, withRouter, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';
import Store from '../../Store';
import { Context } from "../../Store";
const Login = () => {
  const [state, setState]=useContext(Context);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //let pwd=" ";
  const [pwd, setPwd]=useState("");

  function checkIfUserIsValid() {
    axios.get("http://localhost:9090/loginController/getUser/"+username).then(response=>{
      setPwd(response.data.password);
    }).catch(e=>{
      console.log(e);
      return false;
    });
    if (password === pwd) {
      return true;
    }
    else {
      checkIfUserIsValid2();
      }
  }

  function checkIfUserIsValid2() {
    axios.get("http://localhost:9090/loginController/getUser/"+username).then(response=>{
      setPwd(response.data.password);
    }).catch(e=>{
      console.log(e);
      return false;
    });
    if (password === pwd) {
      return true;
    }
    else {
      alert("User not found !!! Try again");
      return false;}
  }

  function Llogin() {
    if(username === ""){
      alert("Enter userid");
      return;
    }
    if(password === ""){
      alert("Enter password");
      return;
    }
  //let isLogged = checkIfUserIsValid();
    if (checkIfUserIsValid()) {
      setState({userId:username});
      navigate("/home");
    } 
  }
  return (
    <div><br />
      <center>
      <div className="bluebox">
      <div className="blueboxcontent">
      <img src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png"></img>
      <p>Login</p><br />
        <div>
          <label>Username</label>{" "}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div><br />
        <div>
          <label>Password</label>{"      "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br />
        <button className="btnn" onClick={Llogin}>Login</button>
      
      <br /><br />
      <div>
        {" "}
        Not an existing user??{" "}
        <Link to="/signup">
          <span>Sign Up</span>
        </Link>
      </div>
      </div>
      </div>
      </center>
  
    </div>
  );
};
export default Login;
