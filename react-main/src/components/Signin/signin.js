import { NavLink,useNavigate } from "react-router-dom";
import { Sidebar } from "../Layouts/sidebar.layouts";
import "../../App.css";
import SidebarB from "../Utilities/sidebar";
import SidebarMobile from "../Utilities/mobile";
import ResponseHead from "../Utilities/responsehead";
import { ToastContainer, toast } from 'react-toastify';
import React, { useState } from 'react'

const Signin = (props) => {


  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  }); 
  const history = useNavigate();
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
  const loginuser = async(e) => {
    e.preventDefault();

    const { email, password } = inpval;

    if (email === "") {
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
        // console.log("user login succesfully done");


        const data = await fetch("/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                 email, password
            })
        });

        const res = await data.json();
        //  console.log(res);

        if(res.status === 201){
            localStorage.setItem("usersdatatoken",res.result.token);
            history("/dash")
                setInpval({...inpval,email:"",password:""});
            }
        }
    }








  return (
    
    
    // var NewComponent = React.createClass({
    //   render: function() {
    //     return (
    <>
          <div>
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
             <div className="wrapper d-flex align-items-stretch">
                <div id="content">
                  <div className="row ms-2 me-2">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 col-12 ms-2 me-2" style={{marginTop:"200px"}}>
                      <img className="mb-2" src="logo.png" width="50px"/>
                      <h2 className="text-dark h3"><strong>Signin to your account</strong></h2>
                      <label className="mb-2 mt-5">Email address</label>
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
                      <p className="mb-2 mt-3 text-muted"><a href="reset" className="ms-2 text-decoration-none"> Reset Password</a></p>
                      <p className="mb-2 mt-3 ms-2 me-2 text-muted">Don't have an account yet?<a href="signup" className="ms-2 text-decoration-none"> Get started here</a></p>
                      <button 
                          className="shadow-sm btn btn_primary_theme btn-lg mb-3 mt-4" 
                          role="button" 
                          type="submit" 
                          value="Send" 
                          id="send" 
                          name="send"
                          onClick={loginuser}>Signin</button>
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
          </div>
   
   
    </>  
    
  );
};

export default Signin;
