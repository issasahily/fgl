import { NavLink } from "react-router-dom";
import { Sidebar } from "../Layouts/sidebar.layouts";
import "../../App.css";
import SidebarB from "../Utilities/sidebar";
import SidebarMobile from "../Utilities/mobile";
import ResponseHead from "../Utilities/responsehead";
import { useAuth0 } from "@auth0/auth0-react";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import './style.css';

const stripePromise = loadStripe("pk_test_51MeaBaSE7s8Z8lPEiLxRPkbaM92qt4W7YLdhRUd1Gp5rlFDdh4P32UIVo2RzusJHWQ0m0YdG18Cr4QnKodbPrFrB00oxnWclZO");

const Plans = (props) => {
  
  const [clientSecret, setClientSecret] = useState("");


  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8888/stripe/create.php", {
      method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify({ items: { amount: 100 } }),
      })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };




  return (
    <>
    
          <div>
              <div className="wrapper d-flex align-items-stretch">
                <SidebarB />
                <SidebarMobile />
              
              <div id="content ">
                <div className="row ms-2 me-2 ms-lg-20 ms-md-20">
              
                <div className="App mt-5">
                  {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm />
                    </Elements>
                  )}
                </div>

                </div>
                
              <div className="row ms-2 me-2">
                  
                  
                
                
                
                
                  </div>
                  
                </div>
                
                  
                  
                </div>
                
              </div>

    </>
            
   
   
    
    
  );
};

export default Plans;
