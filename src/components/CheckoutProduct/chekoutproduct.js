import React from 'react'
import './checkoutproduct.css'
import { UseStateValue } from '../../context-api/StateProvider';


function chekoutproduct(props) {
    const [,dispatch] = UseStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id:props.id,
        });
    
    };

    return (
        <div>
            <div className="checkoutProduct">
                <img src={props.image} alt="" className="checkoutProduct_image"/>
                <div className="checkoutProduct_info">
                    <p className="checkoutProduct_title">
                        {props.title}
                    </p>
                    <p className="checkoutProduct_price">
                        <small>₹</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="checkoutProduct_rating">
                    {
                        Array(props.rating).fill().map((_,i)=>(
                            <p>🌟</p>
                        ))
                    }
                    </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
            </div>

        </div>
    )
}

export default chekoutproduct
