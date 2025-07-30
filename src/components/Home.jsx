import { Form } from "react-router-dom";
import avatar from "../images/avataaars.svg";
export default function Home() {
  return (
      <section className="container home d-flex flex-column align-items-center gap-5 justify-content-center">
        <img src={avatar} alt="avatar" />
        <div className="content d-flex flex-column align-items-center gap-2">
          <h1 className="fw-bold">START FRAMEWORK</h1>
          <div className="star-icon">
            <i className="fa-solid fa-star"></i>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
  );
}
