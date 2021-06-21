import React from "react";
import { Link } from "react-router-dom";
import CategoryTypes from "../CategoryTypes/CategoryTypes";
import "./categories.css";

function Categories() {
  return (
    <div className="categories_container">
      <img
        className="home_image"
        src="https://images.unsplash.com/photo-1611223426643-fa293cb2efbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
      <Link to="/medicine">
        <div className="Categories_row">
          <CategoryTypes
            id="1"
            title="Corona Supplies"
            image="https://www.gannett-cdn.com/presto/2020/03/04/USAT/7dd055c5-73de-40c6-b430-c902bc870fd3-corona_prepare-01.jpg?crop=1764,992,x1614,y296"
          />
        </div>
      </Link>

      <Link to="/hospitals">
        <div className="Categories_row">
          <CategoryTypes
            id="2"
            title="Contact Hospitals"
            image="https://www.kailashhealthcare.com/UserFiles/Department/8b4771c7-737f-4d0c-9227-8aa767ee5486BANNER.jpg"
          />
        </div>
      </Link>
    </div>
  );
}

export default Categories;
