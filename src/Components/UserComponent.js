import React,{useState} from "react";
import {useEffect} from "react";
import axios from 'axios';
import './UserComponent.css';
import { Context } from '../Store';
import { useContext } from "react";
function UserComponent(){
    
    const [state, setState]=useContext(Context);
    const cusId = state.userId;

    const[users,setusers] = React.useState([]);
    const[customerId,setcustomerId] = useState(1);
    const[firstName,setfirstName] = useState('');
    const[lastName,setlastName] = useState('');
    const[mobileNumber,setmobileNumber] = useState('');
    const[email,setemail] = useState('');

    useEffect(() =>{
        getUsers();
    }, []);
    
    function getUsers(){
        axios.get("http://localhost:9090/customerController/viewAllCustomer").then((response)=>{
            setusers(response.data.filter(customer => customer.customerId === cusId))
            console.log(response.data[cusId]);
            console.log(response.data.customerId) 
            setcustomerId(response.data[cusId].customerId)  
            setfirstName(response.data[cusId].firstName)
            setlastName(response.data[cusId].lastName)
            setmobileNumber(response.data[cusId].mobileNumber)
            setemail(response.data[cusId].email)

        })
        .catch((errors)=>{console.log(errors)})
    }

    function updated(){
        alert("Acount Updated");
    }

    function updateCustomer(e){
            axios.post("http://localhost:9090/customerController/addCust",
            {
                "customerId": customerId,
                "firstName": firstName,
                "lastName": lastName,
                "mobileNumber": mobileNumber,
                "email": email
            }
            ).then(function (u){
                console.log("updated");
                updated();
            })
        //}
}


        return(
            <center>
                {getUsers}
            <div className="p-0">                
            <div className="card">
            <div className="card-header">
                CUSTOMER DETAILS
            </div>
            {
                users.map(
                    user =>
                        <div className="card" id="cus-bg">
                            <div className="card" id="cu-bg">
                            <center>
                        <div className="card" id="cust-bg">
                        <center>
                        <div className="card" id="custo-bg">
                        
                        <div className="card-body" key = {user.id}> 

                        {/*CUSTOMER ID*/}
                        <h5 className="card-title">Customer Id</h5>
                        <p className="card-text">{customerId}</p>
                        
                        {/*FIRST NAME*/}
                        <h5 className="card-title">First Name</h5>
                        <div className="card" id="misc"><center>
                        <input type="card" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" defaultValue={firstName} onChange={(e) => setfirstName(e.target.value)}/>
                        </center>
                        </div>
                        
                        {/*LAST NAME*/}
                        <br></br>
                        <h5 className="card-title">Last Name</h5>
                        <div className="card" id="misc">
                        <center><input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" defaultValue={lastName} onChange={(e) => setlastName(e.target.value)}/></center>
                        </div>

                        {/*MOBILE NUMBER*/}
                        <br></br>
                        <h5 className="card-title">Mobile Number</h5>
                        <div className="card" id="misc">
                        <center><input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" defaultValue={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)}/></center>
                        </div>

                        {/*EMAIL*/}
                        <br></br>
                        <h5 className="card-title">Email</h5>
                        <div className="card" id="misc">
                        <center><input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" value={email}/></center>
                        </div>
                        
                        {/*BUTTON*/}
                        <br></br>
                        <button className="btn btn-warning btn-lg btn-block" value="Update" id="cus-up" onClick={updateCustomer}>Update</button>
                        </div>
                        
                        </div>
                        </center>
                        </div>
                        </center>
                        </div>
                        </div>
                )}
                        </div>
                        </div>
                        </center>
        )
}

export default UserComponent;