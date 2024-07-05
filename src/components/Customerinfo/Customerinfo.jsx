import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function CustomerInfo() {

    const history = useHistory(); // maybe need for something?
    const dispatch = useDispatch();
    const checkout = useSelector(store => store.cart);// maybe need for something??
    const cart = useSelector(store => store.cart);
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

    const [customerName, setCustomerName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(
            customerName === "" ||
            street === "" ||
            city === "" ||
            !zip
        ) {
            alert("Empty field, Please complete all fields");
            return;
        }
        dispatch({
            type: 'ADD_CUSTOMER', payload: {customerName, street, city, zip},
        });
        setCustomerName("");
        setStreet("");
        setCity("");
        setZip("");
    };

    return(
        <div className='customer-info'>
            <div>
                <header>
                    <h1> Customer Information </h1>
                </header>
                <p> Total: {totalPrice}</p>
            </div>
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input type="text" value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
                placeholder='Customer Name' />
                <br/> 
                <input type="text" value={street}
                onChange={(event) => setStreet(event.target.value)}
                placeholder='street' />
                <br /> 
                <input type="text" value={city}
                onChange={(event) => setCity(event.target.value)}
                placeholder='city' />
                <br /> 
                <input type="text" value={zip}
                onChange={(event) => setZip(event.target.value)}
                placeholder='zipcode' />
               <br />
                <Link to = "/checkout"><button>Checkout</button></Link>
            </form>

        </div>

        </div>

    )

}
        
 
export default CustomerInfo;