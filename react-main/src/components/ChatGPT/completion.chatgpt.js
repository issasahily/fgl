import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import Information from "../Utilities/information";
import { Configuration, OpenAIApi } from "openai";
import { useAuth0 } from "@auth0/auth0-react";
import SidebarB from "../Utilities/sidebar";
import SidebarMobile from "../Utilities/mobile";
import "../../App.css";

const Completion = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you Today?",
      avatar: "openai-dark.png",
    },
    // {
    // user: "me",
    // message: "asdasda",
    // avatar: "avatar2.png",
    // },
  ]);
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateCompletion = async () => {
    let chatLogNew = [...chatLog, { user: "me", message: prompt }];
    setChatLog(chatLogNew);
    setPrompt("");
    setLoading(true);
    window.document.body.scrollIntoView({ behavior: "smooth", block: "end" });
    const res = await openai.createCompletion({
      prompt: prompt,
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

  const { loginWithRedirect, isAuthenticated, logout, isLoading } = useAuth0();
  if (isLoading) {
    return;
    <div>Loading....</div>;
  }

  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <SidebarB />
        <SidebarMobile />
        <div id="content">
          <div className="row ms-lg-21 ms-md-21">
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12"></div>
            <div className="col-12">
              <div
                className="card-body overflow-scroll"
                data-mdb-perfect-scrollbar="true"
                style={{ position: "relative", height: "720px" }}
              >
                {chatLog.map((log, i) => (
                  <>
                    {log.user === "me" && (
                      <div
                        className="d-flex flex-row justify-content-end"
                        key={i}
                      >
                        <div>
                          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                            {log.message}
                          </p>
                        </div>
                        <img
                          src="https://img.icons8.com/doodle/45/null/name.png"
                          alt="user avatar"
                          style={{ width: "45px", height: "45px" }}
                        />
                      </div>

                      // <div
                      //   className="flex p-5 rounded-lg mb-5 bg-blue-300 border-2 border-black"
                      //   style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                      //   key={i} >
                      //   <img
                      //     src="avatar2.png"
                      //     className="w-8 h-6 mr-2 -ml-1"
                      //     alt="user" />
                      //   <div>
                      //     <span className="text-black mt-5">{log.message}</span>
                      //   </div>
                      // </div>
                    )}
                    {log.user === "gpt" && (
                      <div
                        className="d-flex flex-row justify-content-start mb-4"
                        key={i}
                      >
                        <img
                          src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/45/null/external-AI-artificial-intelligence-smashingstocks-flat-smashing-stocks-9.png"
                          alt="ai avatar"
                          style={{ width: "45px", height: "45px" }}
                        />
                        <div>
                          <p
                            className="small p-2 ms-3 mb-1 rounded-3"
                            style={{
                              backgroundColor: "#f5f6f7",
                              width: "300px",
                            }}
                          >
                            {log.message}
                          </p>
                        </div>
                      </div>
                      // <div
                      //   className="flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black"
                      //   style={{ boxShadow: "0.4rem 0.4rem 0 #222" }}
                      //   key={i}
                      // >
                      //   <img
                      //     src="openai-dark.png"
                      //     className="w-6 h-6 mr-3"
                      //     alt="gpt"
                      //   />
                      //   <div>
                      //     <span className="text-black">{log.message}</span>
                      //   </div>
                      // </div>
                    )}
                  </>
                ))}
                {loading && (
                  <div className="text-center">
                    <img
                      src="loading.gif"
                      style={{ width: "40px", height: "40px" }}
                    />
                  </div>
                  // <div className="relative">
                  //   <div
                  //     className="flex p-5 bg-yellow-400 rounded-lg mt-5 mb-5 border-2 border-black"
                  //     style={{ boxShadow: "0.4rem 0.4rem 0 #222" }} >
                  //     <img src="openai-dark.png" className="w-6 h-6 mr-3" alt="gpt" />
                  //     <div class="col-3">
                  //       <div class="snippet" data-title="dot-pulse">
                  //         <div class="stage">
                  //           <div class="dot-pulse"></div>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                )}
              </div>

              <div
                className="card-footer text-muted d-flex justify-content-start align-items-center p-3"
                style={{ position: "relative" }}
              >
                <TextareaAutosize
                  className="form-control form-control-lg" //2425 App.css
                  placeholder="Enter your message here"
                  maxRows={5}
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <div>
                  <button
                    className="shadow-sm btn btn_primary_theme btn-lg mb-3 ms-2"
                    type="submit"
                    onClick={generateCompletion}
                  >
                    <i class="bi bi-arrow-right-circle-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Completion;
