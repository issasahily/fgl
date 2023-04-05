import { NavLink } from "react-router-dom";
import { Sidebar } from "../Layouts/sidebar.layouts";
import "../../App.css";

const Ads = (props) => {
  return (
    
      
    // var NewComponent = React.createClass({
    //   render: function() {
    //     return (
          <div>
            <title>Ads Description Writing</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
            <link rel="stylesheet" href="../css/styles.css" />
            <div className="wrapper d-flex align-items-stretch">
              <nav id="sidebar" className="border-end ">
                <div className="custom-menu">
                  <button type="button" id="sidebarCollapse" className="btn" style={{backgroundColor: '#f2f5f9'}}>
                    <i className="bi bi-grid-1x2-fill font_color_no" />
                    <span className="sr-only">Toggle Menu</span>
                  </button>
                </div>
                <div className="p-5">
                  <h1><img src="../logo.png" width="50px" height="50px" /><a href="../home" className="logo text-decoration-none ms-3"> AI </a></h1>
                  <ul className="list-unstyled components mb-5 mt-5">
                    <li className="active ms">
                      <a href="../home" className="text-decoration-none"><span className="fa fa-home me-3" /> Home</a>
                    </li>
                    <li>
                      <a href="../blog-title" className="text-decoration-none"><span className="bi bi-type-h1 me-3" /> Blog Title</a>
                    </li>
                    <li>
                      <a href="../blog-description" className="text-decoration-none"><span className="bi bi-pencil-square me-3" /> Blog Description</a>
                    </li>
                    <li>
                      <a href="../blog-article" className="text-decoration-none"><span className="bi bi-newspaper me-3" /> Blog Article</a>
                    </li>
                    <li>
                      <a href="../ads-title" className="text-decoration-none"><span className="bi bi-badge-ad me-3" /> Ads Title</a>
                    </li>
                    <li>
                      <a href="../ads-description" className="text-decoration-none"><span className="bi bi-badge-ad-fill me-3" /> Ads Description</a>
                    </li>
                    <li>
                      <a href="../product-description" className="text-decoration-none"><span className="bi bi-bag-check-fill me-3" /> Product Desc... </a>
                    </li>
                    <li>
                      <a href="../resume-writing" className="text-decoration-none"><span className="bi bi-person-badge-fill me-3" /> Resume</a>
                    </li>
                    <li>
                      <a href="../how-to-article" className="text-decoration-none"><span className="bi bi-patch-question-fill me-3" /> How to</a>
                    </li>
                    <li>
                      <a href="../review-writing" className="text-decoration-none"><span className="bi bi-chat-square-quote-fill me-3" /> Review Writing</a>
                    </li>
                  </ul>
                  <div className="footer">
                    <p> Copyright ©</p>
                  </div>
                </div>
              </nav>
              
              <div id="content">
                
                <div className="row">
                  <div className="col-12 col-lg-6 border-end" style={{backgroundColor: '#f8fafd'}}>
                    <div className="row border-bottom" style={{backgroundColor: '#fff'}}>
                      <div className="col-1 text-center mt-3" />
                      <div className="col-9">
                        <h2 className="badge_h_two mt-3">ADS TITLE</h2>
                        <p className="ms-2">Some Description</p>
                      </div>
                      <div className="col-2 text-center mt-4">
                        <div className="rounded-3" style={{backgroundColor: '#f2f5f9'}}>
                          <i className="bi bi-badge-ad-fill home_icons" />
                        </div>
                      </div>
                    </div>
                    <div className="row overflow-scroll">
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-3">Tell Something about your Product or Service ?</label>
                          <textarea className="form-control shadow-sm" type="text" id="messages" name="messages" placeholder="e.g. SEO Tools or Women Dresses" required style={{height: '30px', resize: 'none', WebkitBoxShadow: 'none'}} defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-5 mb-3">
                          <label className="badge_ai mb-2">Tell Something about your Product or Service ?</label>
                          <textarea className="form-control" type="text" id="messages" name="messages" placeholder="e.g. SEO Tools or Women Dresses" required style={{height: '130px', resize: 'none', WebkitBoxShadow: 'none'}} defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-5 mb-3">
                          <label className="badge_ai mb-2">Tell Something about your Product or Service ?</label>
                          <textarea className="form-control" type="text" id="messages" name="messages" placeholder="e.g. SEO Tools or Women Dresses" required style={{height: '130px', resize: 'none', WebkitBoxShadow: 'none'}} defaultValue={""} />
                        </div>
                      </div>
                      <div style={{marginBottom: '70px'}} />
                      <div className="col-12" style={{backgroundColor: '#fff'}}>
                        <div className="mt-4 mb-4 text-center d-grid">
                          <button className="shadow-sm btn btn_primary_theme btn-lg mb-3 ms-2" role="button" type="submit" value="Send" id="send" name="send">Generate</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 position-static">
                    <div className="row border-bottom border-top" style={{backgroundColor: '#fff'}}>
                      <div className="col-12 text-center">
                        <p className="shadow-sm btn btn_primary_ai_response btn-sm mt-2 mb-2" id="toastbtn">Outputs</p>
                        <p className="shadow-sm btn btn_primary_ai_response btn-sm mt-2 mb-2 ms-5">Outputs</p>
                      </div>
                    </div>
                    <div className="text-center mt-3 mb-3">
                      <button type="button" className="btn" data-element="bold" id="bold">
                        <i className="fa fa-bold" />
                      </button>
                      <button type="button" className="btn" data-element="italic">
                        <i className="fa fa-italic" />
                      </button>
                      <button type="button" className="btn" data-element="underline">
                        <i className="fa fa-underline" />
                      </button>
                      <button type="button" className="btn" data-element="insertUnorderedList">
                        <i className="fa fa-list-ul" />
                      </button>
                      <button type="button" className="btn" data-element="insertOrderedList">
                        <i className="fa fa-list-ol" />
                      </button>
                      <button type="button" className="btn" data-element="createLink">
                        <i className="fa fa-link" />
                      </button>
                      <button type="button" className="btn" data-element="justifyLeft">
                        <i className="fa fa-align-left" />
                      </button>
                      <button type="button" className="btn" data-element="justifyCenter">
                        <i className="fa fa-align-center" />
                      </button>
                      <button type="button" className="btn" data-element="justifyRight">
                        <i className="fa fa-align-right" />
                      </button>
                      <button type="button" className="btn" data-element="justifyFull">
                        <i className="fa fa-align-justify" />
                      </button>
                      <button type="button" className="btn" data-element="insertImage">
                        <i className="fa fa-image" />
                      </button>
                    </div>
                    <div className="ai_content" contentEditable="true">
                      <h2>SomeTesting</h2>
                    </div>
                    <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
                      <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                          <img src="http://localhost:8888/jasper/logo.png" width="20px" height="20px" className="rounded me-2" alt="..." />
                          <strong className="me-auto">ZMime </strong>
                          <small>AI Tools</small>
                          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
                        </div>
                        <div className="toast-body">
                          ADS TITLE GENERATION
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className="bot-loader">
                  <h2 className="badge_h_two mt-5">AI Response</h2>
                  <hr className="mb-5" />
                  <div className="card ms-lg-0 me-lg-5 mt-lg-3 loader" style={{borderRadius: '3%', border: 'none'}}>
                    <div className="row mt-5 text-center mb-5">
                      <div className="col-12">
                        <div className="text-center pb-4">
                          <img src="../loadingBot.gif" style={{width: '250px', height: '200px'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5 mb-5">
                    <div className="col-12 col-lg-10" id="response">
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
   
   
    
    
  );
};

export default Ads;
