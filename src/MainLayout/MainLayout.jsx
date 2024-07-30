import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

function MainLayout() {
  return (
    <div className="mx-auto max-w-7xl">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
