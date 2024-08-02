import React from "react";
import Conversation from "./Conversation";

function Conversations() {
  return (
    <>
      <div className="py-2 mb-3 flex flex-col overflow-auto">
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
      </div>
    </>
  );
}

export default Conversations;
