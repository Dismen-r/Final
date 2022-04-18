import React, { useEffect, useState } from 'react';
import OrderService from './OrderService';
import "./Order.css"

function ViewAllOrderComponent(){
        const[order,setOrder] = useState([]);
       
    useEffect(()=>{

    OrderService.getOrder().then( res => {
        setOrder(res.data)
        console.log(order)
        

    })

},[])
return (
        <div>
            <header>
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div id = "ordernavtitle" className ="navtitle">
                        <a className="navbar-brand">E-Commerce</a></div>
                    </nav>
                </header>
            <div id = "b-img" style={{ backgroundImage: `url(https://cdn.wallpapersafari.com/70/10/VQWxKr.jpg)`,
                           backgroundSize:'cover',
                           height:'800px'
                        }}>
             <h1 id = "order-dashboard" className="text-center">ORDER-DASHBOARD</h1>
             <br></br>
             <div id = "order-table" className = "row">
             <table style={{marginLeft:"30px"}} className="table table-light table-hover">


                        <thead>
                            <tr>
                                <th> ORDERID</th>
                                <th>PRODUCT LIST</th>
                                <th>ORDER DATE</th>
                                <th>ORDER STATUS</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                                    {
                                       order.map((
                                        o)=>
                                
                                    
                                    <tr key = {o.orderId}>
                                         <td> {o.orderId} </td>
                                         
                                         <td><ol>
                                             {

                                             o.products.map((p)=>

                                             <li><a target="_blank" href={p.color}>
                                             <img id="figure" src={p.color} style={{width: "50px"}}/>
                                             </a>   {p.productName}</li>
                                             )}
                                             
                                         </ol>

                                         </td>
                                         <td> {o.orderDate}</td>
                                         <td> {o.orderStatus}</td>
                                        
                                    </tr>
                                    )}
    
                                       
                                    
     
                                    
                                    
                                

                        </tbody>
                            
                    </table>

             </div>

        </div>
        </div>
    )
}


export default ViewAllOrderComponent;