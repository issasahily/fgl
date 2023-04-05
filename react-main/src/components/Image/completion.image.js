import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Information from "../Utilities/information";
import "../../App.css";
import { Configuration, OpenAIApi } from "openai";
import SidebarB from "../Utilities/sidebar";
import SidebarMobile from "../Utilities/mobile";
import ResponseHead from "../Utilities/responsehead";
import { useAuth0 } from "@auth0/auth0-react";
import LanguageGet from "../Utilities/Languages";

const Completion = () => {
  const [prompt, setPrompt] = useState("");
  const [prompt2, setPrompt2] = useState("");
  const [prompt3, setPrompt3] = useState("");
  const [prompt4, setPrompt4] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    
  ]);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    let chatLogNew = [...chatLog, { user: "me", message: prompt }];
    setChatLog(chatLogNew);
    setPrompt("");
    
    setLoading(true);
    window.document.body.scrollIntoView({ behavior: "smooth", block: "end" });
    const res = await openai.createImage({
      prompt: prompt + "also add this style:" +prompt2,
      n: 3,
      size: "1024x1024",
    });
    setLoading(false);
    setChatLog([...chatLogNew, { user: "gpt", message: res.data.data }]);
  };

  // const generateImage = async () => {
    
  //   let chatLogNew = [...chatLog, { user: "me", message: prompt },{ user: "me", message: prompt2 }];
  //   setChatLog(chatLogNew);
  //   // setPrompt("");
  //   // setPrompt2("");
  //   // setPrompt3("");
  //   // setPrompt4("");
  //   setLoading(true);
    
  //   const res = await openai.createImage({
  //     prompt: prompt,
  //     n: prompt3,
  //     size: prompt4+"x"+prompt4
  //   });
  //   setLoading(false);
  //   console.log.data(res.data.data.data);
  //   setChatLog([
  //     ...chatLogNew,
  //     { user: "gpt", message: `${res.data.data}` },
  //   ]);
  // };

  const handleClick = () => {
    // Get the text from the element with the specified ID
    const text = document.getElementById('ai_response_data').textContent;

    // Copy the text to the clipboard
    navigator.clipboard.writeText(text);
  };

  const {loginWithRedirect, isAuthenticated, logout, isLoading} = useAuth0();
  if (isLoading) {
    return 
    <div>
      Loading....
    </div>;
  }

  return (
    <>
    
    {
      isAuthenticated ?
      <div className="wrapper d-flex align-items-stretch">
             
              <SidebarB />
              <SidebarMobile />
              <div id="content">
                
                <div className="row ms-lg-21 ms-md-21">
                  <div className="col-12 col-lg-6 border-end" style={{backgroundColor: '#f8fafd'}}>
                    <div className="row border-bottom" style={{backgroundColor: '#fff'}}>
                      
                      <div className="col-2 text-center mt-4 ms-4">
                        <div className="rounded-3">
                          <img src="https://img.icons8.com/arcade/64/null/image.png" width="50px"/>
                        </div>
                      </div>
                      <div className="col-9">
                        <h2 className="badge_h_two mt-3">Image</h2>
                        <p className="ms-2">AI Image Generation</p>
                      </div>
                      
                    </div>
                    <div className="row overflow-scroll">
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-1"><b>Tell us about your image</b></label>
                          <textarea 
                          className="form-control shadow-sm" 
                          type="text" 
                          id="messages" 
                          name="messages" 
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          required style={{height: '130px', resize: 'none', WebkitBoxShadow: 'none'}} 
                          defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-1"><b>Select the Style ?</b></label>
                          <select id="messages" className="form-control shadow-sm" name="messages" 
                          class="form-control" required="" value={prompt2}
                          onChange={(e) => setPrompt2(e.target.value)}>
                            <option value="Pencil Drawing">Pencil Drawing</option>
                            <option value="Claude Monet">Claude Monet</option>
                            <option value="Naturalism">Naturalism</option>
                            <option value="Photorealism">Photorealism</option>
                            <option value="Minimalism">Minimalism</option>
                            <option value="Line Art">Line Art</option>
                            <option value="Retro">Retro</option>
                            <option value="Vintage">Vintage</option>
                            <option value="Geometric Drawing">Geometric Drawing</option>
                            <option value="Abstract">Abstract</option>
                            <option value="3D illustration">3D illustration</option>
                            <option value="Surrealistic">Surrealistic</option>
                            <option value="Psychedelic Art">Psychedelic Art</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-1"><b>Total No of Images</b></label>
                          <textarea 
                          className="form-control shadow-sm" 
                          type="text" 
                          id="messages" 
                          name="messages" 
                          value={prompt3}
                          onChange={(e) => setPrompt3(e.target.value)}
                          placeholder="max 3" 
                          required style={{height: '30px', resize: 'none', WebkitBoxShadow: 'none'}} 
                          defaultValue={"3"} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-1"><b>Image Size ?</b></label>
                          <select id="messages" className="form-control shadow-sm" name="messages" 
                          class="form-control" required="" value={prompt4}
                          onChange={(e) => setPrompt4(e.target.value)}>
                            <option value="1024">1024x1024</option>
                          </select>
                        </div>
                      </div>
                      
                      <div style={{marginBottom: '50px'}} />
                      <div className="col-12" style={{backgroundColor: '#fff'}}>
                        <div className="mt-4 mb-4 text-center d-grid">
                          <button 
                          className="shadow-sm btn btn_primary_theme btn-lg mb-3 ms-2" 
                          role="button" 
                          type="submit" 
                          value="Send" 
                          id="send" 
                          name="send"
                          onClick={generateImage}>Generate</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 position-static">
                    <ResponseHead />
                    

                    <div className="ai_content">

                      

                    {chatLog.map((d, i) => (
                      <>
                        
                        {d.user === "gpt" && (
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-5">
                            {d.message.map((res, i) => {
                              return (
                                <>
                                  <div className="card mt-4 mb-4 shadow-sm border-0 p-2" style={{backgroundColor:"#f8fafd"}}>
                                    <div className="card-body">
                                      <img id="ai_response_data" src={res.url} alt={`${i}`} class="w-100 shadow-1-strong rounded mb-4"/>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                            
                          </div>
                        )}
                      </>
                    ))} 
                      {loading && (
                        <div className="text-center mt-5" >
                        <img src="loadingBot.gif" width="150px" height="150px" className="w-6 h-6 mr-3" alt="gpt" />
                        
                      </div>
                      )}

                    </div>
                    
                  </div>
                  
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
            
    </>
  );
};

export default Completion;