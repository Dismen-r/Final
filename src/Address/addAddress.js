import react,{useState} from "react"
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import "./style.css";
import { useContext } from "react";
import { Context } from "../Store";


function UpdateAddressComponent (){
    const [state, setState]=useContext(Context);
    const cusid = state.userId;

    const navigate = useNavigate();
    
    const[addressId,setAddressId] = useState('');
    const[streetNo,setStreetNo] = useState('');
    const[buildingName,setBuildingName] = useState('');
    const[city,setCity] = useState('');
    const[statE,setStatE] = useState('');
    const[country,setCountry] = useState('');
    const[pincode,setPincode] = useState('');

    function addaddress(){

        axios.put("http://localhost:9090/addressController/updateAddress",
        {
            "addressId":addressId,
            "streetNo":streetNo,
            "buildingName": buildingName,
            "city": city,
            "state": statE,
            "country": country,
            "pincode": pincode,
            "cusId": cusid,
        }   
        )
        navigate('/viewAllAddress')
    }


return(
<div style={{ backgroundImage: `url(https://img.freepik.com/free-photo/background_53876-32169.jpg?w=360)`,
        backgroundSize:'cover',
        height:'710px'}}>
    <h2>Add Address</h2>
<form className="adding">
    <br/>
    
                                         <div >
                                             <label> AddressId : </label>
                                             <input placeholder="AddressId" name="AddressId" 
                                                  onChange={(e)=>setAddressId(e.target.value)}/>
                                         </div>
                                         <br/>
                                         <div >
                                             <label> StreetNo : </label>
                                             <input placeholder="StreetNo" name="StreetNo"  
                                                  onChange={(e)=>setStreetNo(e.target.value)}/>
                                         </div>
                                         <br/>
                                         <div >
                                             <label> BuildingName : </label>
                                             <input placeholder="BuildingName" name="BuildingName" 
                                                  onChange={(e)=>setBuildingName(e.target.value)}/>
                                         </div>
                                         <br/>
                                         <div >
                                             <label> City : </label>
                                             <input placeholder="City" name="City" 
                                                 onChange={(e)=>setCity(e.target.value)}/>
                                         </div>
                                         <br/>
                                         <div >
                                             <label> State : </label>
                                             <input placeholder="State" name="State" 
                                                 onChange={(e)=>setStatE(e.target.value)}/>
                                         </div>
                                         <br/>
                                         <div >
                                             <label> Country : </label>
                                             <input placeholder="Country" name="Country" 
                                                  onChange={(e)=>setCountry(e.target.value)}/>
                                         </div>
                                         <br/>
                                         <div >
                                             <label> Pincode : </label>
                                             <input placeholder="pincode" name="pincode"  
                                                  onChange={(e)=>setPincode(e.target.value)}/>
                                         </div>
                                         <br/>
                                         <pre>       </pre>
                                         <button  onClick={addaddress}>Save</button>
                                     </form>
                                     </div>
    )
}

export default UpdateAddressComponent