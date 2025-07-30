import React from "react";

export default function About() {
  console.log("About component rendered");

  return (
    <section className="container d-flex flex-column align-items-center justify-content-center">
      <h1 className="fw-bold">ABOUT COMPONENT</h1>
      <div className="star-icon">
        <i className="fa-solid fa-star"></i>
      </div>
      <div className="about-content container d-flex justify-content-center mt-3">
        <p className=" ps-5 pe-3">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className=" pe-5">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </section>
  );
}
