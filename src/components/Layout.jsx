import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div>
      <div className="d-flex flex-column min-vh-100 justify-content-between">
        <Navbar></Navbar>
          <Outlet />
        <Footer></Footer>
      </div>
    </div>
  );
}
