import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Router from "../../Router";
const Signup = () => {
//const navigate = useNavigate();
const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [email, setEmail] = useState("");
const [pwd, setPwd] = useState("");
const [pwd1, setPwd1] = useState("");
var id=1;
const setId=()=>{
  axios.get("http://localhost:9090/loginController/getUser/"+id).then(response=>{
    console.log("a");
    id++;
    setId();
    }).catch(e=>{
      console.log("b");
      return true;
    });
}
const success =()=>{
  alert("Account Created....\nYour Login Details :\n userid : "+id+"\nPassword : "+pwd+"\nLogin with the above credentials !");
  

}

const done =()=>{
  if(fname === ""){
    alert("Enter First Name");
    return;
  }
  if(lname === ""){
    alert("Enter Last Name");
    return;
  }
  if(email === ""){
    alert("Enter your Email");
    return;
  }
  if(email.includes("@") && email.includes(".")){

  }
  else{
    alert("Enter valid email");
    return;
  }
  if(pwd === ""){
    alert("Enter Password");
    return;
  }
  if(pwd.length<6){
    alert("Password should have atleast 6 characters");
    return;
  }
  if(setId()){
    id++;
  }
if(pwd === pwd1){
  axios.post('http://localhost:9090/loginController/addUser',
  {
      
    "userId": id,
    "password": pwd,
    "role": "user",
    "customer": {
        "customerId": "1002",
        "firstName": fname,
        "lastName": lname,
        "mobileNumber": "undefined",
        "email": email
    }


}).then(function (r){
  console.log("posted");
  success();
})
}
else{
alert("Password does not match! Re-enter again");
return;
}
};
  return (
    <div ><center><br />
    <div className="bluebox">
    <div className="blueboxcontent">
    
    <p>
Create new account :</p>

<table>
  <tbody>
  <tr><td>
    First Name :</td>
    <td><input onChange={(e) => setFname(e.target.value)} type="text" name="userid" data-testid="fname-check" required/></td></tr>
    <tr><td colSpan={2}>&nbsp;</td></tr><tr><td colSpan={2}>&nbsp;</td></tr>
    <tr><td>Last Name :</td>
    <td><input onChange={(e) => setLname(e.target.value)} type="text" name="userid" required/></td></tr>
    <tr><td colSpan={2}>&nbsp;</td></tr><tr><td colSpan={2}>&nbsp;</td></tr>
    <tr><td>Email address :</td>
    <td><input onChange={(e) => setEmail(e.target.value)} type="email" data-testid="email-check" required/></td></tr>
    <tr><td colSpan={2}>&nbsp;</td></tr><tr><td colSpan={2}>&nbsp;</td></tr><tr>
    <td>Password : </td>
    <td><input onChange={(e) => setPwd(e.target.value)} type="password" name="password1" required/></td></tr>
    <tr><td colSpan={2}>&nbsp;</td></tr><tr><td colSpan={2}>&nbsp;</td></tr><tr>
    <td>Re-enter Password : </td>
    <td><input onChange={(e) => setPwd1(e.target.value)} type="password" name="password1" required/></td></tr>
    </tbody></table>
    <br /><center><br /><br />
    <button className="btn" onClick={done} data-testid="btn-check">Sign Up</button></center><br />
    Back to{" "}
    <Link to="/">
          <span>Login</span>
        </Link>
    </div>
    </div></center>
  </div>
  );
};

export default Signup;
