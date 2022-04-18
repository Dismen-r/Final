import React from 'react'
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import axios from 'axios';
import { Context } from '../Store';
import { useContext } from "react";
function AddressComponent(){

    const [state, setState]=useContext(Context);
    const cusid = state.userId;

    const navigate = useNavigate();

    const[address,setAddress] = React.useState([]);


    useEffect(() => {
        getAllAddress();
      }, []);

      function getAllAddress(){
        axios.get("http://localhost:9090/addressController/viewAllAddress").then((response)=>{
            setAddress(response.data.filter((address) => address.cusId=== cusid))
            console.log(response.data)   
        })
        .catch((errors)=>{console.log(errors)})
      }

      function deleteAddress(id){
        axios.delete("http://localhost:9090/addressController/removeAddress/"+id).then( id => {
            getAllAddress();
        });
    }

      function viewAddress(id){
            navigate(`/view-address/${id}`)
      }

      function updateAddress(){
          navigate('/updateaddress')
      }
      
      return(
        <div className="h" style={{ backgroundImage: `url(https://img.freepik.com/free-photo/background_53876-32169.jpg?w=360)`,
        backgroundSize:'cover',
        height:'710px'}}>
             <h2 >ADDRESS</h2>
            <div >
            
                 </div>
                 <br/>
        
                    {
                        address.map(
                            address =>
                            <div className ="addr"key={address.addressId}>
                                <div>Street No - {address.streetNo}</div>
                                <div>Building Name -{address.buildingName}</div>
                                <div>City - {address.city}</div>
                                <div>State - {address.state}</div>
                                <div>Pincode - {address.pincode}</div>
                                <br/>
                                <span>

                                        <button id="b" onClick={updateAddress}> Update</button>
                                        {/* <button  className="b" onClick={()=>viewAddress(address.addressId)}>View </button> */}
                                </span>
                            </div>
                        )
                    }
        </div>
    )
}


export default AddressComponent
