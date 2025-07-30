import React from "react";
export default function Footer() {
  return (
    <div>
      <footer className="bg-primary ">
        <div className="text-center d-flex flex-column">
          <div className="top">
            <div className="container py-5 d-flex justify-content-evenly align-items-center">
              <div className="location w-100">
                <h3>Location</h3>
                <p>2215 John Daniel Drive</p>
                <span>Clark, MO 65243</span>
              </div>
              <div className="icons w-100">
                <h2>AROUND THE WEB</h2>

                <div className=" d-flex gap-3 justify-content-center">
                  <div className="icon border-white rounded-circle p-2 border">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="icon border-white rounded-circle p-2 border">
                    <i className="fa-brands fa-twitter"></i>
                  </div>
                  <div className="icon border-white rounded-circle p-2 border">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="icon border-white rounded-circle p-2 border">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>

              <div className="about w-100 d-flex flex-column align-items-center">
                <h2>ABOUT FREELANCER</h2>
                <p className="w-75">
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>

          <div className="bottom py-3">
            <p>Copyright © Your Website 2021</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
