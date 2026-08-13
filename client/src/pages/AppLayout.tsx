import { Outlet } from "react-router-dom";
import Banner from "../components/Banner";
import Navbar from "../components/navbar";

const AppLayout = () => {
  return (
    <>
      {/* This will be displayed on all pages except login page. */}
      <Banner />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <p>footer</p>
      <p>cartSidebar</p>
    </>
  );
};

export default AppLayout;
