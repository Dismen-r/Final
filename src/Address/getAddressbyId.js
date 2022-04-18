import React, {useState} from 'react'
import {useEffect} from "react";
import {useParams} from "react-router-dom"
import "./style.css"
import axios from 'axios';

function ViewAddressComponent (props){ 
{

    const[address,setAddress] = useState([]);

    const id =  useParams().id;

    
    useEffect(() => {
        axios.get("http://localhost:9090/addressController/viewAddressBy/"+id).then( (response) => {
            setAddress(response.data);
            console.log(response.data)
        })
      }, []);


        return (
            <div style={{ backgroundImage: `url(https://img.freepik.com/free-photo/background_53876-32169.jpg?w=360)`,
            backgroundSize:'cover',
            height:'710px'}}>
                <h3 >Address Details</h3>
                <br></br>
                <div className="details">
                    <br/>
                    <div>Street No - {address.streetNo}</div>
                    <div>Building Name -{address.buildingName}</div>
                    <div>City - {address.city}</div>
                    <div>State - {address.state}</div>
                    <div>Pincode - {address.pincode}</div>
                </div>
            </div>
        )
    }
}

export default ViewAddressComponent