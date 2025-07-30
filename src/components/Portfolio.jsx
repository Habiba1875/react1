import React from "react";
import cake from "../images/cake.png";
import house from "../images/house.png";
import circus from "../images/circus.png";

export default function Portfolio() {
  return (
    <div className="bg-white">
      <section className="container portfolio d-flex py-5 flex-column align-items-center text-center">
        <h1 className="fw-bold">PORTFOLIO COMPONENT</h1>
        <div className="star-icon">
          <i className="fa-solid fa-star"></i>
        </div>
        <div className="row gy-5 pt-3">
          <div className="col-md-4 col-sm-6">
            <div className="img-card rounded-4 ">
              <div className="outlay"><i className="fa-solid fa-plus"></i></div>
              <img src={house} alt="cake" className="rounded-3"/>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="img-card rounded-4 ">
              <div className="outlay"><i className="fa-solid fa-plus"></i></div>
              <img src={cake} alt="cake" className="rounded-3"/>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="img-card rounded-4 ">
              <div className="outlay"><i className="fa-solid fa-plus"></i></div>
              <img src={circus} alt="cake" className="rounded-3"/>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="img-card rounded-4 ">
              <div className="outlay"><i className="fa-solid fa-plus"></i></div>
              <img src={house} alt="cake" className="rounded-3"/>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="img-card rounded-4 ">
              <div className="outlay"><i className="fa-solid fa-plus"></i></div>
              <img src={cake} alt="cake" className="rounded-3"/>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="img-card rounded-4 ">
              <div className="outlay"><i className="fa-solid fa-plus"></i></div>
              <img src={circus} alt="cake" className="rounded-3"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
