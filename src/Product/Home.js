import React, { useState } from 'react';
import Itemcart from './Itemcart';
import Product from './Products';
import ProductService from './ProductService';
const Pro = (props) => {
    // const {users=useState(<ProductService/>);

    return (

        <>
            <h1 className='text-center mt-3' style={{ backgroundColor: '#2874f0' }}> Products</h1>
            <section className='pu-4 container'>
                <div className='row justify-content-center'>
                    <Product />


                </div>
            </section>
        </>
    );
};

export default Pro;