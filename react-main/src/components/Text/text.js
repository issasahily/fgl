import { NavLink } from "react-router-dom";
import { Sidebar } from "../Layouts/sidebar.layouts";
import "../../App.css";
import SidebarB from "../Utilities/sidebar";
import SidebarMobile from "../Utilities/mobile";
import ResponseHead from "../Utilities/responsehead";
import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";




const Textdashboard = (props) => {
  function NavList() {
    // This styling will be applied to a <NavLink> when the
    // route that it links to is currently selected.
    let activeStyle = {
      textDecoration: "underline",
    };
  
    let activeClassName = "underline";
  }
  const {loginWithRedirect, isAuthenticated, logout, isLoading} = useAuth0();
  if (isLoading) {
    return 
    <div>
      Loading....
    </div>;
  }
  
  return (
    
    <>
    
          <div>
            
            {
              isAuthenticated ? 
             <div className="wrapper d-flex align-items-stretch">
                <SidebarB />
                <SidebarMobile />
              
              <div id="content">
                <div className="row ms-2 me-2 ms-lg-20 ms-md-20">
                    
                    
                  {/* ads start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Ads & Paid Media</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/facebookadheadline" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/linkedin-ad-descriptions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">LinkedIn Ad Descriptions</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate LinkedIn Ad Descriptions.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/linkedin-ad-headlines" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/linkedin-circled--v1.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">LinkedIn Ad Headlines</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate LinkedIn Ad Headlines.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    
                    
                    
                    
                    
                    
                   
                  </div>
                  {/* ads end */}
                  {/* blogging start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Blogging</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/conclusionparagraph" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/seo-meta-title" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color-glass/48/null/html-filetype.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">SEO Meta Title</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate SEO Meta Title.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/seo-meta-descriptions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color-glass/48/null/html-filetype.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">SEO Meta Descriptions</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate SEO Meta Descriptions.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                  </div>
                  {/* blogging end */}
                  
                  {/* google my business start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Google My Business</strong></h2>
                    
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/googlemybusinessofferpost" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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

                  {/* video start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Videos</strong></h2>
                    
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/video-script-hook-and-introduction" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/null/external-Video-Reel-multimedia-vectorslab-flat-vectorslab-2.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Video Script</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Video Script Hook and Introduction.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/video-script-outline" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-flat-icons-vectorslab/68/null/external-Video-Reel-social-media-flat-icons-vectorslab.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Video Script Outline</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Video Script Outline.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/video-titles" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-vectorslab-flat-vectorslab/53/null/external-Video-Reel-internet-security-and-communication-vectorslab-flat-vectorslab.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Video Titles</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Video Titles.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/video-topic-ideas" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/project-management.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Video Topic Ideas</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Video Topic Ideas.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/tiktok-video-captions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/tiktok--v1.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">TikTok Video Captions</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate TikTok Video Captions.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/video-sales-letter" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color-glass/48/null/laptop-play-video.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Video Sales Letter</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Video Sales Letter.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                  </div>
                  {/* video end */}

                  {/* youtube start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Youtube Videos</strong></h2>
                    
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/youtube-descriptions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/youtube-play.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">YouTube Descriptions</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate YouTube Descriptions.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/youtube-titles" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/youtube-play.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">YouTube Titles</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate YouTube Titles.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/youtube-ideas" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/youtube-play.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">YouTube Ideas</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate YouTube Ideas.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/youtube-intros" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/youtube-play.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">YouTube Intros</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate YouTube Intros.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/youtube-outlines" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/youtube-play.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">YouTube Outlines</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate YouTube Outlines.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                   
                  </div>
                  {/* youtube end */}

                  {/* business start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Business</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/companybio" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                  {/* business end */}

                  {/* social media start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Social Media</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/personallinkedlnpost" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/tweet-machine" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/twitter--v1.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Tweet</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Tweet.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    
                   
                  </div>
                  {/* business end */}

                  {/* email start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Mail Writing</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/emailsubjectlines" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                  {/* email end */}
                  
                  {/* product start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Product & E-Com</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/amazonproductdescription" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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

                  
                  {/* question start */}
                  <div className="row">
                    <h2 className="mt-3 mb-4 text-dark ms-1"><strong>Questions & Others</strong></h2>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/engagingquestions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                        <div className="card rounded-9">
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
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/sentence-expander" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/cute-clipart/64/null/resize-diagonal.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Sentence Expander</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Sentence Expander Ad Primary Text.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/press-release-title-and-intro" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/news.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Press Release Title and Intro</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Press Release Title and Intro.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/explain-it-to-a-child" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/emoji/48/null/child-light-skin-tone.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Explain It To a Child</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Explain It To a Child.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/personal-bio" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/secretary-woman-skin-type-2.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Personal Bio</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Personal Bio.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/persuasive-bullet-points" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/overview-pages-3.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Persuasive Bullet Points</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Persuasive Bullet Points.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/photo-post-captions" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/stack-of-photos--v1.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Photo Post Captions</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Photo Post Captions.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/real-estate-listing" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/office/80/null/real-estate.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Real Estate Listing</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Real Estate Listing.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/text-summarizer" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-sbts2018-flat-sbts2018/58/null/external-summary-basic-ui-elements-2.4-sbts2018-flat-sbts2018.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Text Summarizer</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Text Summarizer.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/baby-name-generator" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/child-tasty.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Baby Name Generator</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Baby Name Generator.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/commands" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/cotton/64/null/source-code--v1.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Commands</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Commands.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/content-improver" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-improvement-productivity-flaticons-lineal-color-flat-icons.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Content Improver</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Content Improver.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/creative-story" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/storytelling.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Creative Story</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Creative Story.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/landing-page-headlines" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/null/external-clickbait-digital-marketing-flaticons-flat-flat-icons.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Landing Page Headlines</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Landing Page Headlines.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/content-shortener" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/shrink.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Content Shortener</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Content Shortener.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/startup-ideas" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/color/48/null/launched-rocket--v1.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Startup Ideas</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Startup Ideas.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/image" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/arcade/64/null/image.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">Image</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate Image.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    <div className="col-12 col-lg-3 mb-4 mt-1"> 
                      <NavLink to="/news-headline" style={{textDecoration:"none",color:"#000"}}>
                        <div className="card rounded-9">
                          <div className="text-decoration-none">
                            <div className="card-body my-2">
                              <img className="shadow rounded-9" src="https://img.icons8.com/fluency/48/null/newspaper-.png" width="50px" />
                              <h5 className="card-title icons_text_heading ms-2 me-2 mt-4">News Headline</h5>
                              <p className="card-text icons_text_description ms-2 me-2 mt-2">Generate News Headline.</p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                    
                   
                  </div>
                  {/* question end */}
                  
                  
                    
                    
                </div>
              </div>
            </div>
            :
            
            <div id="content">
                <div className="row ms-2 me-2">
                  <div className="col-lg-4"></div>
                  <div className="col-lg-4 col-12 ms-2 me-2" style={{marginTop:"200px"}}>
                    <img className="mb-2" src="logo.png" width="50px"/>
                    <h2 className="text-dark h3"><strong>Signin to your account</strong></h2>
                    
                    <button 
                        className="shadow-sm btn btn_primary_theme btn-lg mb-3 mt-4" 
                        onClick={() => loginWithRedirect()}
                        >Signin</button>
                  </div>
                  <div className="col-lg-4"></div>
                </div>
              </div>
            }
          </div>
    </>
   
   
    
    
  );
};

export default Textdashboard;
