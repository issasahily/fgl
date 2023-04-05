import { NavLink } from "react-router-dom";
import { Sidebar } from "../Layouts/sidebar.layouts";
import "../../App.css";
import SidebarB from "../Utilities/sidebar";
import SidebarMobile from "../Utilities/mobile";
import ResponseHead from "../Utilities/responsehead";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = (props) => {

  const [inpval, setInpval] = useState({
    fname: "",
    lname: "",
    email: "",
    password: ""
  });
  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
        return {
            ...inpval,
            [name]: value
        }
    })
  };
  const addUserdata = async (e) => {
    e.preventDefault();

    const { fname,lname, email, password } = inpval;

    if (fname === "") {
        toast.warning("fname is required!", {
            position: "top-center"
        });
    } else if (lname === "") {
      toast.error("lname is required!", {
          position: "top-center"
      });
    } else if (email === "") {
        toast.error("email is required!", {
            position: "top-center"
        });
    } else if (!email.includes("@")) {
        toast.warning("includes @ in your email!", {
            position: "top-center"
        });
    } else if (password === "") {
        toast.error("password is required!", {
            position: "top-center"
        });
    } else if (password.length < 6) {
        toast.error("password must be 6 char!", {
            position: "top-center"
        });
    } else {
        // console.log("user registration succesfully done");
        const data = await fetch("/register", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              fname, lname, email, password
          })
        });

      const res = await data.json();
      // console.log(res.status);

      if (res.status === 201) {
          toast.success("Registration Successfully done 😃!", {
              position: "top-center"
          });
          setInpval({ ...inpval, fname: "", lname: "", email: "", password: ""});
      }
  }
}







  return (
    
    
    // var NewComponent = React.createClass({
    //   render: function() {
    //     return (
          <div>
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
             <div className="wrapper d-flex align-items-stretch">
                <div id="content">
                  <div className="row ms-1">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 col-12 ms-2 me-2" style={{marginTop:"120px"}}>
                      <img className="mb-2" src="logo.png" width="50px"/>
                      <h2 className="text-dark h3"><strong>Create your account</strong></h2>
                      <form>
                        <label className="mb-2 mt-3">First Name</label>
                        <input 
                            className="form-control shadow-sm" 
                            type="text" 
                            onChange={setVal}
                            value={inpval.fname}
                            id="fname" 
                            name="fname"  />
                        <label className="mb-2 mt-3">Last Name</label>
                        <input 
                            className="form-control shadow-sm" 
                            type="text"
                            onChange={setVal}
                            value={inpval.lname}
                            id="lname" 
                            name="lname" />
                        <label className="mb-2 mt-3">Email address</label>
                        <input 
                            className="form-control shadow-sm" 
                            type="text" 
                            onChange={setVal}
                            value={inpval.email}
                            id="email" 
                            name="email"/>
                        <label className="mb-2 mt-3">Password</label>
                        <input 
                            className="form-control shadow-sm" 
                            type="password"
                            onChange={setVal} 
                            value={inpval.password}
                            id="password" 
                            name="password" />
                        <p className="mb-2 mt-3 ms-2 me-2 text-muted">Already have an account?<a href="signin" className="ms-2 text-decoration-none"> Login</a></p>
                        <button 
                            className="shadow-sm btn btn_primary_theme btn-lg mb-3 mt-4" 
                            role="button" 
                            type="submit" 
                            value="Send" 
                            id="send" 
                            name="send"
                            onClick={addUserdata}>Signup</button>
                      </form>
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
          </div>
   
   
    
    
  );
};

export default Signup;
