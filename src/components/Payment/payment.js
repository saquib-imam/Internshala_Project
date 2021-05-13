import React from 'react'
import './payment.css'
import { UseStateValue } from '../../context-api/StateProvider'
import Checkoutproduct from '../CheckoutProduct/chekoutproduct'
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket,user},dispatch] =UseStateValue();
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    CheckOut (<Link to="/checkout">{basket?.length}</Link>) items
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>
                            Delivery Address
                        </h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>Adderss line 1</p>
                        <p>Adderss line 2</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Your requested Items</h3>
                    </div>
                        <div className="payment_items">
                            {basket.map(item => (
                                 <Checkoutproduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                 />
                            ))}
                        </div>
                </div>
                <div className="payment_section">
                     <div className="payment_title">
                         <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* {stripe thingy} */}
                    </div>           
                </div>
            </div>
        </div>
    )
}

export default Payment
