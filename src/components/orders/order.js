import React from "react";
import "./orders.css";
import moment from "moment";
import Checkoutproduct from "../CheckoutProduct/chekoutproduct";

function Order(props) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>
        {moment.unix(props.order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order_id">
        <small>{props.order.id}</small>
      </p>
      {props.order.data.basket?.map((item) => (
        <Checkoutproduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          boo={false}
        />
      ))}
    </div>
  );
}

export default Order;
