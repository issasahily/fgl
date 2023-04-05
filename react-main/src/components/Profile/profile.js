import { NavLink } from "react-router-dom";
import { Sidebar } from "../Layouts/sidebar.layouts";
import "../../App.css";
import SidebarB from "../Utilities/sidebar";
import SidebarMobile from "../Utilities/mobile";
import ResponseHead from "../Utilities/responsehead";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilePage = (props) => {
  const {isAuthenticated, logout, user,loginWithRedirect} = useAuth0();

  return (
    
    <>
    
          <div>
             <div className="wrapper d-flex align-items-stretch">
                <SidebarB />
                <SidebarMobile />
              
              <div id="content">
                
                
              <div className="row ms-2 me-2 ms-lg-20 ms-md-20">
                  
                  <div className="col-12 mb-4" style={{backgroundColor: '#f8fafd'}}>
                    <div className="row" style={{backgroundColor: '#fff'}}>
                      {/* <div className="col-2 text-center mt-4 ms-4">
                        <div className="rounded-3" style={{backgroundColor: '#f2f5f9'}}>
                          <i className="bi bi-badge-ad-fill home_icons" />
                        </div>
                      </div> */}
                      <div className="col-9">
                        <h2 className="badge_h_two mt-3 mb-3">Profile Settings</h2>
                      </div>
                    </div>
                  </div>
                
                
                <div className="row">
                  <div className="col-12 mb-4 mt-1">
                  {isAuthenticated ? 
                    <div className="card rounded-4">
                      <div className="card-body my-2 text-center">
                        <img src={user.picture} className="shadow rounded-9"  width="50px"/>
                        
                        <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Name: {user.name}</h5>
                        <p className="card-text icons_text_description ms-2 me-2 mt-2">Email Id: {user.email}</p>
                        <button  className="shadow-sm btn btn_primary_theme btn-lg mb-3 mt-4" 
                          role="button" 
                          type="submit" 
                          value="Send" 
                          id="send" 
                          name="send"
                          onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
                      </div>
                    </div>
                  : 
                
                ''
                  
                  }
                  </div>
                  
                </div>
                
                <div className="row">
                  <div className="col-12">
                    <div className="card mb-4 mb-md-0">
                      <div className="card-body">
                        <p className="mb-4"><span className="text-primary font-italic">Select Plan</span> 
                        </p>
                        <stripe-pricing-table
                            pricing-table-id="prctbl_1MjldESCOJEYAUAxdcUp85DE"
                            publishable-key="pk_test_51KvyWVSCOJEYAUAxhlgYV507nfwolKOKyAbNGdgwLalbIdfuii5gFhxuTOU6xamYSVFoJMny7JoIYCHMsd6V5ZZH001yBf7swE"
                          >
                          </stripe-pricing-table>
                      </div>
                    </div>
                  </div>
                </div>
                  
                  
                </div>
                
              </div>
            </div></div>
            

                </>
   
   
    
    
  );
};

export default ProfilePage;
