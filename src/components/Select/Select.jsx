import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function pizzaSelect() {
    const pizzas = useSelector(state => state.pizzas);
    const cart = useSelector(state => state.cart);

    const dispatch = useDispatch();


    return (

    );


}

export default pizzaSelect;