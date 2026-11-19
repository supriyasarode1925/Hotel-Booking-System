import { createBrowserRouter } from "react-router-dom"
import { Home } from "./Pages/Home"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact";
import { RouterProvider } from "react-router-dom"
import { Applayout } from "./Applayout/Applayout"
import { HotelDetails } from "./Components/HotelDetails";
import { Booking } from "./Components/Booking";
import { OrderSuccess } from "./Components/OrderSuccess";
import { Login } from "./Pages/Login";
import { Services } from "./Pages/Services";
import { Career } from "./Pages/Career"
import { Faq } from "./Pages/Faq"
import { PrivacyPolicyDetails } from "./Components/PrivacyPolicy/PrivacyPolicyDetails";
import "./App.css"
import { TermsConditions } from "./Components/Terms/TermsConditions";
import { PaymentDetails } from "./Components/PaymentDetails";


function App() {

const router = createBrowserRouter([
    {
      path: "/",
      element:  <Applayout />,
      children:[
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: "About",
            element: <About></About>
          },
          {
            path: "Contact",
            element: <Contact></Contact>
          },
          {
            path: "services",
            element: <Services></Services>
          },
          {
            path: "/hotel/:id",
            element: <HotelDetails></HotelDetails>
          },
          {
            path: "/payment/:id",
            element: <PaymentDetails />
          },
          {
            path: "/booking",
            element: <Booking></Booking>
          },
          {
            path: "/login",
            element: <Login></Login>
          },
          {
            path: "/success",
            element: <OrderSuccess></OrderSuccess>
          }, 
          {
            path: "/career",
            element: <Career></Career>
          },
          {
            path: "/faq",
            element: <Faq></Faq>
          },
          {
            path: "/privacypolicy",
            element: <PrivacyPolicyDetails></PrivacyPolicyDetails>
          },
          {
            path: "/termcondition",
            element: <TermsConditions></TermsConditions>
          },
        ]},
      ])

  return (
    <>
  
       <RouterProvider router={router}> </RouterProvider>
   
    </>
  )
}

export default App
