import React from "react";
import "./CategoryTypes.css";

function CategoryTypes(props) {
  return (
    <div className="product">
      <div className="product_info">
        <p className="desc">{props.title}</p>
      </div>
      <img src={props.image} alt="" className="product_image" />
    </div>
  );
}

export default CategoryTypes;
