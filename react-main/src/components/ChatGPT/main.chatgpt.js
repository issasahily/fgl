import React from "react";
import Completion from "./completion.chatgpt";

const Chatgpt = (props) => {
  return (
    <React.Fragment>
      <div className="mt-2 text-center">
        <p className="text-xs md:text-base mt-3 text-dark">
          {props.description}
        </p>
      </div>
      <Completion />
    </React.Fragment>
  );
};

export default Chatgpt;
