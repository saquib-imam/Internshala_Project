import React from "react";
import "./perDoctor.css";

function PerDoctor(props) {
  return (
    <div className="product">
      <div className="product_info">
        <p className="desc">{props.title}</p>
      </div>
      <img src={props.image} alt="" className="product_image" />
      <p className="Phone">Emergency No : {props.contactNo}</p>
    </div>
  );
}

export default PerDoctor;
