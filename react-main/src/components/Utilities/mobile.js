import { NavLink } from "react-router-dom";

const SidebarMobile = () => {
  return (
    <div class="fixed-bottom d-md-block d-sm-block d-lg-none d-xl-none" style={{backgroundColor: '#fff'}}>
                <div className="row">
                <NavLink className="col-4 text-center" to="/text" style={{textDecoration:"none",color:"#000"}}>
                    <img className="mt-4 mb-4" src="dashboard.png" width="30px"/>
                </NavLink>
                <NavLink className="col-4 text-center" to="/image" style={{textDecoration:"none",color:"#000"}}>
                    <img className="mt-4 mb-4" src="gallery.png" width="30px"/>
                </NavLink>
                <NavLink className="col-4 text-center" to="/profile" style={{textDecoration:"none",color:"#000"}}>
                    <img className="mt-4 mb-4" src="user.png" width="30px"/>
                </NavLink>
                </div>
              </div>
			
			
			  

  );
};

export default SidebarMobile;
