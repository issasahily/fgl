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

  const generateCompletion = async () => {
    
    let chatLogNew = [...chatLog, { user: "me", message: prompt },{ user: "me", message: prompt2 }];
    setChatLog(chatLogNew);
    // setPrompt("");
    // setPrompt2("");
    // setPrompt3("");
    // setPrompt4("");
    setLoading(true);
    
    const res = await openai.createCompletion({
      prompt: "generate" + prompt3 + "Real Estate Listing on" + prompt2 + "Language:"+prompt4,
      model: "text-davinci-003",
      temperature: 0.9,
      max_tokens: 2048,
    });
    setLoading(false);
    setChatLog([
      ...chatLogNew,
      { user: "gpt", message: `${res.data.choices[0].text}` },
    ]);
  };

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
                          <img src="https://img.icons8.com/office/80/null/real-estate.png" width="50px"/>
                        </div>
                      </div>
                      <div className="col-9">
                        <h2 className="badge_h_two mt-3">Real Estate Listing</h2>
                        <p className="ms-2">Generate Real Estate Listing</p>
                      </div>
                      
                    </div>
                    <div className="row overflow-scroll">
                      
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-1"><b>Topic</b></label>
                          <textarea 
                          className="form-control shadow-sm" 
                          type="text" 
                          id="messages" 
                          name="messages" 
                          value={prompt2}
                          onChange={(e) => setPrompt2(e.target.value)}
                          required style={{height: '150px', resize: 'none', WebkitBoxShadow: 'none'}} 
                          defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-1"><b>Keywords</b></label>
                          <textarea 
                          className="form-control shadow-sm" 
                          type="text" 
                          id="messages" 
                          name="messages" 
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          required style={{height: '30px', resize: 'none', WebkitBoxShadow: 'none'}} 
                          defaultValue={""} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-1"><b>Total No of Responses</b></label>
                          <textarea 
                          className="form-control shadow-sm" 
                          type="text" 
                          id="messages" 
                          name="messages" 
                          value={prompt3}
                          onChange={(e) => setPrompt3(e.target.value)}
                          placeholder="3" 
                          required style={{height: '30px', resize: 'none', WebkitBoxShadow: 'none'}} 
                          defaultValue={"3"} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="ms-3 me-2 mt-4 mb-4">
                          <label className="badge_ai mb-1"><b>Language</b></label>
                          <select id="messages" className="form-control shadow-sm" name="messages" 
                          class="form-control" required="" value={prompt4}
                          onChange={(e) => setPrompt4(e.target.value)}>
                            <LanguageGet />
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
                          onClick={generateCompletion}>Generate</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 position-static">
                    <ResponseHead />
                    

                    <div className="ai_content">

                      {chatLog.map((log, i) => (
                        <>
                          {log.user === "gpt" && (
                            <div key={i} >
                              <div className="card mt-4 mb-4 shadow-sm border-0 p-2" style={{backgroundColor:"#f8fafd"}}>
                                <div className="card-body">
                                  <h3 className="h5 text-dark ms-1 mt-1 mb-2" id="ai_response_data">{log.message}</h3>
                                  <button style={{background:"#eef2fe", color:"#4339ca"}} onClick={handleClick} id="copy_button_1" class="btn border-0 mt-2 shadow-sm">Copy</button>
                                </div>
                              </div>
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