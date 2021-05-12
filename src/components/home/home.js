import React from 'react'
import Product from '../product/product'
import './home.css'

function home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images.unsplash.com/photo-1611223426643-fa293cb2efbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""/>
                <div className="home_row">
                    <Product 
                        id="1"
                        title='Oxygen Cylinders' 
                        price={5000} 
                        image="https://images-na.ssl-images-amazon.com/images/I/71qBKQEF8EL._SL1500_.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="2"
                        title='Remdesivir' 
                        price={2000} 
                        image="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/1/8/6/504186_shutterstock_1677307855_83678.jpg" 
                        rating={5}
                    />
                    
                </div>
               
                <div className="home_row">
                    <Product
                        id="3" 
                        title='Covaxin' 
                        price={400} 
                        image=" https://images.cnbctv18.com/wp-content/uploads/2021/01/vaccine_covaxin-768x432.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="4"
                        title='Covisheld' 
                        price={400} 
                        image=" https://images.livemint.com/img/2021/01/11/600x338/09d1fec2-30be-11eb-a8f0-5f006243e72b_1609834809780_1609834821413_1610361435856.jpg" 
                        rating={5}
                    />
                    <Product 
                        id="5"
                        title='Mask' 
                        price={1000} 
                        image="https://media.cntraveler.com/photos/5f611848b364bbb0663273b1/master/w_2100,h_1500,c_limit/UnderArmourFaceMask.jpg" 
                        rating={5}
                    />
                </div>
                <div className="home_row">
                    <Product 
                        id="5"
                        title='Hospital Bed' 
                        price={100000}
                        image="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80" 
                        rating={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default home
