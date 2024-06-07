import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";


const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
