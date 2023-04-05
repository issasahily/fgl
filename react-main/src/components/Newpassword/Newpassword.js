import { NavLink } from "react-router-dom";
import { Sidebar } from "../Layouts/sidebar.layouts";
import "../../App.css";
import SidebarB from "../Utilities/sidebar";
import SidebarMobile from "../Utilities/mobile";
import ResponseHead from "../Utilities/responsehead";

const Newpasswordconfirm = (props) => {
  return (
    
    
    // var NewComponent = React.createClass({
    //   render: function() {
    //     return (
          <div>
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
             <div className="wrapper d-flex align-items-stretch">
                <div id="content">
                  <div className="row ms-2 me-2">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4 col-12 ms-2 me-2" style={{marginTop:"200px"}}>
                      <img className="mb-2" src="logo.png" width="50px"/>
                      <h2 className="text-dark h3"><strong>Enter new password</strong></h2>
                      <label className="mb-2 mt-5">New Password</label>
                      <textarea 
                          className="form-control shadow-sm" 
                          type="text" 
                          id="messages" 
                          name="messages" 
                          required style={{height: '30px',width:'350px', resize: 'none', WebkitBoxShadow: 'none'}} 
                          defaultValue={""} />
                      <label className="mb-2 mt-3">Confirm new password</label>
                      <textarea 
                          className="form-control shadow-sm" 
                          type="text" 
                          id="messages" 
                          name="messages" 
                          required style={{height: '30px',width:'350px', resize: 'none', WebkitBoxShadow: 'none'}} 
                          defaultValue={""} />
                      <button 
                          className="shadow-sm btn btn_primary_theme btn-lg mb-3 mt-5" 
                          role="button" 
                          type="submit" 
                          value="Send" 
                          id="send" 
                          name="send">Confirm</button>
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
          </div>
   
   
    
    
  );
};

export default Newpasswordconfirm;
