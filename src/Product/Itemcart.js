import React from 'react';
import { useCart } from "react-use-cart";
const Itemcart = (props) => {
    const { addItem } = useCart();
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
            <div class="card p-0 overflow-hidden h-100 shadow" >
                <img src={props.item.color} class="card-img-top img-fluid" />
                <div class="card-body text-center">
                    <h5 class="card-title">Title :{props.item.productName}</h5>
                    <h5 class="card-text">Rupees :{props.item.price}</h5>
                    <h5 class="card-text">Desc :{props.item.specification}</h5>
                    <button class="btn btn-success" onClick={() => addItem({ id: props.item.productId, price: props.item.price, title: props.item.productName, desc: props.item.specification, img: props.item.color })}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Itemcart;