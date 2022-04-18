import React from 'react';
import react from 'react';
import axios from 'axios';
import Navbar from '../Pages/Home/Navbar';
import ViewAllOrderComponent from '../Components/ViewAllOrderComponent';

class ProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
       axios.get('http://localhost:9090/productController/viewAllProducts').then((response) =>{
            this.setState({users: response.data})
        });
    }


    render(){
        return (
            <div>
                <Navbar>
                    
                </Navbar>
                <div style={{ backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAA1BMVEW42PHvbB/vAAAAJklEQVRoge3BgQAAAADDoPlT3+AEVQEAAAAAAAAAAAAAAAAAAM8AO5QAAWgYnEQAAAAASUVORK5CYII=)`,
                           backgroundSize:'cover',
                           height:'650px'}}>
                <h1>CHOOSE YOUR PRODUCTS</h1>
                
            
                
                   
                    
                        {
                            this.state.users.map(
                                user =>
                                <ul key = {user.productId}>
                                    <img className = "left" src= {user.color} style={{width: "300px"}}/>
                                    <li>productid: {user.productId}</li>
                                    
                                    <li>product price {user.price}</li> 
                                    
                                    <li>dimensions {user.dimension}</li>
                                    <li> specifications{user.specification}</li>
                                    <li>manufacturer {user.manufacturer}</li>
                                    <li>quantity {user.quantity}</li>
                                    <li> <button className = "right" onClick="myFunction()">ADD TO CART</button></li>

                        
                                    
                                    </ul>
                                    

                            )
                            
                            
                        }
                        <hr></hr>
                    
                    



            </div>
            </div>
        )
    }
}
export default ProductComponent