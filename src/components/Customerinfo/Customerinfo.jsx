import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function CustomerInfo() {

    const history = useHistory();
    const dispatch = useDispatch();
    const checkout = useSelector((store) => store.cart);

    const [customerName, setCustomerName] = usestate('');
    const [street, setStreet] = usestate('');
    const [city, setCity] = usestate('');
    const [zip, setZip] = usestate('');
   
    const handleSubmit = (event) =>{
        event.preventDefault();
        if(
            customerName === "" ||
            street === "" ||
            city === "" ||
            !zip ||
        ) {
            alert("Empty field, Please complete all fields");
            return;
        }
        dispatch({
            type: ADD_CUSTOMER, payload: {customerName, street, city, zip},
        });
    }





    return{

    }
}
export default CustomerInfo;