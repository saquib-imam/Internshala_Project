import React from 'react'
import "./checkout.css"
import Subtotal from '../subtotal/subtotal'
import Checkoutproduct from '../CheckoutProduct/chekoutproduct'
import { UseStateValue } from '../../context-api/StateProvider';

function checkout() {
    const [{ basket,user },] = UseStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <h3>Hello,  {user?.email}</h3>
                <h2 className="checkout_title">
                    Your Request List
                </h2>
                {basket.map(item =>(
                    <Checkoutproduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default checkout
