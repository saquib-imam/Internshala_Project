import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { UseStateValue } from '../../context-api/StateProvider';

function subtotal() {
    const [{ basket }] = UseStateValue();
    const getBasketTotal = () => {
        var ans=0;
        for( var i=0;i<basket.length;i++)
            ans+=basket[i].price;
        return ans;
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal {basket.length} items :
                            <strong>{`${value}`}</strong>
                        </p>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal()}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Post Request</button>
        </div>
    )
}

export default subtotal
