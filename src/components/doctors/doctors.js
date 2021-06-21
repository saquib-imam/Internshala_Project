import React from "react";
import "./doctors.css";
import PerDoctor from "../perDoctor/perDoctor";

function Doctor() {
  return (
    <div className="home_container">
      <img
        className="home_image"
        src="https://images.unsplash.com/photo-1611223426643-fa293cb2efbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
      <div className="doctors_row">
        <PerDoctor
          id="1"
          title="Next Door Pharmacy"
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/02/attachment_81618514-e1518608141433.jpg?auto=format&q=60&fit=max&w=930"
          contactNo="995478621"
          rating={5}
        />
        <PerDoctor
          id="2"
          title="Hudson Hospital"
          image="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/02/attachment_92102020-e1518608585683.jpg?auto=format&q=60&fit=max&w=930"
          contactNo="995478622"
          rating={5}
        />
        <PerDoctor
          id="3"
          title="Apollo Hospital"
          image="https://upload.wikimedia.org/wikipedia/en/c/c5/Apollo_Hospitals_Logo.svg"
          contactNo="995478623"
          rating={5}
        />
      </div>

      <div className="doctors_row">
        <PerDoctor
          id="4"
          title="Care Hospital"
          image="https://upload.wikimedia.org/wikipedia/commons/6/68/Care_Hospital_%2CBanjarahills.jpg"
          contactNo="995478624"
          rating={5}
        />
        <PerDoctor
          id="5"
          title="Fortis Hospital"
          image="https://upload.wikimedia.org/wikipedia/en/e/ef/Fortis_Healthcare_logo.svg"
          contactNo="995478625"
          rating={5}
        />
        <PerDoctor
          id="5"
          title="Hinduja Hospital"
          image="https://upload.wikimedia.org/wikipedia/commons/3/3c/Hinduja_Healthcare_Surgical%2C_Khar%2C_Mumbai.jpg"
          contactNo="995478626"
          rating={5}
        />
      </div>
    </div>
  );
}

export default Doctor;
