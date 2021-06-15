import React, {useState,useEffect } from 'react'
import './payment.css'
import { UseStateValue } from '../../context-api/StateProvider'
import Checkoutproduct from '../CheckoutProduct/chekoutproduct'
import { Link ,useHistory} from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format'
import axios from '../../context-api/axios';
import {db} from '../../firebase'

function Payment() {
    const [{basket,user},dispatch] =UseStateValue();

    const getBasketTotal = () => {
        var ans=0;
        for( var i=0;i<basket.length;i++)
            ans+=basket[i].price;
        return ans;
    }

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const[error,setError] = useState(null); 
    const[disabled,setDisabled] = useState(true); 
    const[clientSecret,setClientSecret] = useState(true); 
    const history = useHistory();
    
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url:`/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log('The Secret is >>',clientSecret)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);



        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {

            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            });

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders');
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.event?e.error.message:""); 
    }

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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal()}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                            </div>
                            <button disabled = {processing || disabled|| succeeded}>
                                <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                            </button>
                            {error && <div>{error}</div>}
                        </form>
                    </div>           
                </div>
            </div>
        </div>
    )
}

export default Payment
