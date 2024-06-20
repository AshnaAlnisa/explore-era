import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import ContactUs from "./pages/contactUs/ContactUs.jsx";
import TermsAndConditions from "./pages/termsAndConditions/TermsAndConditions.jsx";
import TopDestinations from "./pages/topDestinations/TopDestinations.jsx";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy.jsx";
import DestinationHimachal from "./pages/destinations/DestinationHimachal.jsx";
import DestinationUttarakhand from "./pages/destinations/DestinationUttarakhand.jsx";
import MotorBiking from "./pages/holidayIdeas/adventureTourism/MotorBiking.jsx";
import ChristianPT from "./pages/holidayIdeas/pilgrimageTourism/ChristianPT.jsx"
import HimachalTourPackages from "./pages/packages/packagesBystate/HimacharTourPackages.jsx"
import ChadarTrek from "./pages/packages/fixedDepartureTour/ChadarTrek.jsx";
import Delhi from "./pages/weekendGateways/Delhi.jsx"
// import Dashboard from "./components/dashboard/Dashboard.jsx"
import EnquiryFormDetails from "./components/dashboard/EnquiryFormDetails.jsx";
import BookYourTripFormDetails from "./components/dashboard/BookYourTripFormDetails.jsx";
import AdminWelcome from "./components/dashboard/AdminWelcome.jsx";
import AdminLogin from "./components/dashboard/AdminLogin.jsx";

// import DestinationUttarakhand from "./pages/destinations/DestinationUttarakhand.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  // {
  //   path: "/destination",
  //   element: <DestinationHimachal />,
    
  // },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/termsAndConditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/topDestinations",
    element: <TopDestinations />,
  },
  {
    path: "/privacyPolicy",
    element: <PrivacyPolicy />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard/>,
  // },
  {
    path: "/login",
    element: <AdminLogin/>,
  },
  {
    path: "/enquiryFormDetails",
    element: <EnquiryFormDetails/>,
  },
  {
    path: "/bookYourTripFormDetails",
    element: <BookYourTripFormDetails/>,
  },
  {
    path: "/adminWelcome",
    element: <AdminWelcome/>,
  },
 
  // {
  //   path:"/motorBiking",
  //   element: <MotorBiking/>,
  // }
  // {
  //   path: "/himachalTourPackages",
  //   element: <HimachalTourPackages />,
  // },
  // {
  //   path: "/christianPilgrimageTourism",
  //   element: <ChristianPT/>,
  // },
  // {
  //   path: "/himachalTourPackages",
  //   element: <HimacharTourPackages/>,
  // },
  // {
  //   path: "/delhi",
  //   element: <Delhi/>,
  // },
  // {
  //   path: "/chadarTrek",
  //   element: <ChadarTrek/>,
  // },
  {
    path:"/himachalPradesh",
    element:<DestinationHimachal/>
  },
  {
    path:"/uttarakhand",
    element:<DestinationUttarakhand/>
  },
  {
    path:"/motorBiking",
    element:<MotorBiking/>
  },
  {
    path:"/christianPT",
    element:<ChristianPT/>
  },
  {
    path:"/himachalTourPackages",
    element:<HimachalTourPackages/>
  },
  {
    path:"/chadarTrek",
    element:<ChadarTrek/>
  },
  {
    path:"/delhi",
    element:<Delhi/>
  },

  // {
  //   path:"/uttarakhand",
  //   element:<DestinationUttarakhand/>
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
