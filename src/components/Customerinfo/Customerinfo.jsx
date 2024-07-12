import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function CustomerInfo() {
    const history = useHistory();
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);
    const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);

    const [customerName, setCustomerName] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('pickup');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (customerName === "" || street === "" || city === "" || !zip) {
            alert("Empty field, Please complete all fields");
            return;
        }
        dispatch({
            type: 'ADD_CUSTOMER', payload: { customerName, street, city, zip, deliveryMethod },
        });
        history.push('/checkout');
    };

    return (
        <div className='customer-info'>
            <div>
                <header>
                    <h2> Step 2: Customer Information </h2>
                </header>
                <p> Total: ${totalPrice}</p>
            </div>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={customerName}
                        onChange={(event) => setCustomerName(event.target.value)}
                        placeholder='Customer Name' />
                    <br />
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
                    <br />
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="pickup"
                                checked={deliveryMethod === 'pickup'}
                                onChange={(event) => setDeliveryMethod(event.target.value)}
                            />
                            Pick-Up
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="delivery"
                                checked={deliveryMethod === 'delivery'}
                                onChange={(event) => setDeliveryMethod(event.target.value)}
                            />
                            Delivery
                        </label>
                    </div>
                    <br />
                    <button type="submit">Next</button>
                </form>
            </div>
        </div>
    )
}

export default CustomerInfo;
