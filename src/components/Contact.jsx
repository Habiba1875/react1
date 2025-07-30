import React from "react";

export default function Contact() {
  return (
    <section className="contact bg-white py-5">
      <div className="container d-flex flex-column align-items-center">
        <h1 className="fw-bold">CONTACT SECTION</h1>
        <div className="star-icon">
          <i className="fa-solid fa-star"></i>
        </div>
        <form className="container mt-5 w-50">
          <div className="mb-4">
            <input
              type="text"
              placeholder="userName"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="number"
              placeholder="userAge"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="userEmail"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="userPassword"
              className="form-control border-0 border-bottom rounded-0 shadow-none"
            />
          </div>

          <button type="submit" className="btn text-white fw-bold px-4 py-2">
            send Message
          </button>
        </form>
      </div>
    </section>
  );
}
