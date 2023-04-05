import { NavLink } from "react-router-dom";
import { Sidebar } from "../Layouts/sidebar.layouts";
import "../../App.css";
import Profile from "../Utilities/UserInfo";
import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/js/bootstrap';


const MainUi = (props) => {
  
  const {loginWithRedirect, isAuthenticated, logout} = useAuth0();
  return (
    
      
    
          
          <div style={{backgroundColor: '#111828'}}>
            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
            
            <nav className="navbar navbar-dark navbar-expand-lg" style={{backgroundColor: '#111828'}}>
              <div className="container-fluid ">
                <a className="navbar-brand" href="#"><img src="../logo.png" width="50px" className="ms-lg-5" /><span className="ms-3">AI Tools</span></a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
                    </li>
                  </ul>
                </div> */}
                {
                  isAuthenticated ? 
                  <div className="nav-item me-lg-5 mt-3 btn-lg"><button className="btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out </button></div>
                  : 
                  <div className="nav-item me-lg-5 mt-3 btn-lg"><button className="btn btn-light" onClick={() => loginWithRedirect()}>Log In</button></div>
                }
              </div>
            </nav>
            <section>
              <h1 className="text-center ms-5 me-5 text-white display-4" style={{marginTop: '100px'}}><strong><b><em>70+</em> AI Writing Tools <br /> try NOW</b></strong></h1>
              <p className="text-center ms-5 me-5 mt-5 text-white h5">  No more wasting time changing tabs or researching endlessly.</p>
              <div className="text-center mt-5">
              <NavLink to="/text" style={{textDecoration:"none",color:"#000"}}> 
                <button type="button" className="btn btn-primary btn-lg rounded-pill"><strong>Start Writing Now</strong></button>
              </NavLink>
              </div>
              {/* <div className="customer-logos slider" style={{marginTop: '100px'}}>
                <div className="slide text-center">
                  <i className="bi bi-type-h1 homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi-pencil-square homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi-newspaper homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi-badge-ad homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi-badge-ad-fill homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi-bag-check-fill homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi-person-badge-fill homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi-patch-question-fill homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi-chat-square-quote-fill homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi bi-receipt-cutoff homepage_icons" />
                </div>
                <div className="slide text-center">
                  <i className="bi bi bi-twitter homepage_icons" />
                </div>
              </div> */}
            </section>
            <section className style={{backgroundColor: '#fff', paddingTop: '100px', marginTop: '100px', paddingBottom: '200px', borderTopLeftRadius: '54px', borderTopRightRadius: '54px'}}>
              <h2 className="text-center display-4 text-dark"><strong><b>What AI can write for you ?</b></strong></h2>
              <p className="text-center ms-5 me-5 h5 mt-5">Our AI has been trained on high-performing copy from the top brands.</p> 
              <p className="text-center ms-5 me-5 h5 mt-2">It knows what converts and how to write content that resonates with your audience.</p>
              {/* Product section start */}
              
              {/* Product section end */}
              {/* ads section start */}
              <div className="row mt-5">
                <div className="col-1" />
                <div className="col-10">
                  
                  {/* product start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Product & E-Com</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/amazonproductdescription" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/144/null/amazon.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4"> Amazon Product Description</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Amazon Product Description.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/amazonproductfeatures" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/144/null/amazon.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Amazon Product Features</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Amazon Product Features (bullets).</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/productname" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/96/null/new-product.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Product Name</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Product Name.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/featuretobenefit" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/96/null/remote-working.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Feature to Benefit</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Feature to Benefit.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/productdescription" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/96/null/content.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Product Description</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Product Description.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    
                   
                  </div>
                  {/* product end */}
                </div>
                <div className="col-1" />
              </div>
              {/* ads section end */}
              
              <div className="row mt-5">
                <div className="col-1" />
                <div className="col-10">
                  {/* social media start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Social Media</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/personallinkedlnpost" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/linkedin-circled.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4"> Personal Linkedln Post</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Personal Linkedln Post.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/pinterestpindescription" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/pinterest.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Pinterest Pin Description</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Pinterest Pin Description.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/pinterestpintitle" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/pinterest.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Pinterest Pin Title</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Pinterest Pin Title.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    
                   
                  </div>
                  {/* business end */}
                </div>
                <div className="col-1" />
              </div>
              
              
              
              <div className="row mt-5">
                <div className="col-1" />
                <div className="col-10">
                  
                  {/* blogging start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Blogging</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/conclusionparagraph" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/blog.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Conclusion Paragraph</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Blog Post Conclusion Paragraph.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/introparagraph" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/go.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Intro Paragraph</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Blog Post Intro Paragraph.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/blogpostoutline" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/cotton/64/null/outline.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Blog Post Outline</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Blog Post Outline Paragraph.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/oneshortblogpost" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/lowercase.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">One Short Blog Post</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate One Short Blog Post.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/paragraphgenerator" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-bearicons-flat-bearicons/64/null/external-paragraph-graphic-design-bearicons-flat-bearicons.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Paragraph Generator</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Blog Paragraph Generator.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/perfectheadline" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/headline.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Perfect Headline</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Perfect Headline for Blog Post.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/blogsubheadline" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-headline-press-and-media-flaticons-flat-flat-icons-2.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Blog Sub headline</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Blog Sub headline.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                  </div>
                  {/* blogging end */}
                </div>
                <div className="col-1" />
              </div>
              <div className="row mt-5">
                <div className="col-1" />
                <div className="col-10">
                  {/* google my business start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Google My Business</strong></h2>
                    
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/googlemybusinessofferpost" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/google-logo.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Google My Business Offer Post</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Google My Business Offer Post.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/mybusinesspost" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/google-logo.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4"> My Business Post</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Google My Business - What's New Post.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/productdescription" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/google-logo.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Product Description</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Google My Business - Product Description.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/eventpost" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/google-logo.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Event Post</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Google My Business - Event Post.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                   
                  </div>
                  {/* google my business end */}
                </div>
                <div className="col-1" />
              </div>


              <div className="row mt-5">
                <div className="col-1" />
                <div className="col-10">
                  {/*start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Mail Writing</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/emailsubjectlines" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/gmail.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4"> Email Subject Lines</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Email Subject Lines.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/personalizedcoldemails" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/96/null/apple-mail.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Personalized Cold Emails</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Personalized Cold Emails.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                   
                  </div>
                  {/*  end */}
                </div>
                <div className="col-1" />
              </div>

              <div className="row mt-5">
                <div className="col-1" />
                <div className="col-10">
                  {/*start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Questions</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/engagingquestions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/96/null/questions.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4"> Engaging Questions</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Engaging Questions.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/pollquestions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/96/null/poll-topic.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Poll Questions</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Poll Questions & Multiple Choice Answers.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/quoraanswers" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/null/external-quora-is-a-place-to-gain-and-share-knowledge-logo-color-tal-revivo.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Quora Answers</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Quora Answers.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/faqgenerator" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/96/null/faq.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">FAQ Generator</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">FAQ Generator.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/reviewresponder" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/96/null/feedback-hub.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Review Responder</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Review Responder.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                   
                  </div>
                  {/*  end */}
                </div>
                <div className="col-1" />
              </div>

              <div className="row mt-5">
                <div className="col-1" />
                <div className="col-10">
                  {/*start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Business</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/companybio" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/company.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4"> Company Bio</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Company Bio.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/uniquevaluepropositions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-unique-traditional-marketing-flaticons-flat-flat-icons.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Unique Value Propositions</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Unique Value Propositions.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/businessname" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/address-book.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Business Name</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Business Name.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                   
                  </div>
                  {/*  end */}
                </div>
                <div className="col-1" />
              </div>

              <div className="row mt-5">
                <div className="col-1" />
                <div className="col-10">
                  {/*start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Ads & Paid Media</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/facebookadheadline" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/facebook-new.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Facebook Ad Headline</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Facebook Ad Headline.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/facebookadprimarytext" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/facebook-new.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Facebook Ad Primary Text</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Facebook Ad Primary Text.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/googleadsdescription" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/google-logo.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Google Ads Description</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Google Ads Description.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/googleadsheadline" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/google-logo.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Google Ads Headline</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Google Ads Headline.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/marketingangles" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/marketing.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Marketing Angles</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Marketing Angles.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/ridiculousmarketingideas" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-4">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-flaticons-flat-circular-flat-icons/64/null/external-marketing-automation-technology-flaticons-flat-circular-flat-icons.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Ridiculous Marketing Ideas</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Ridiculous Marketing Ideas.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                   
                  </div>
                  {/*  end */}
                </div>
                <div className="col-1" />
              </div>

              
              
              
              
            </section>
          </div>
    //     );
    //   }
    // });
   
    
    
  );
};

export default MainUi;
