import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";

function Message({ src, username, message, timestamp }) {
  return (
    <div className="message">
      <Avatar src={src}/>
      <div className="message__info">
        <h4>
          Ken Kioria
          <span className="message__timestamp">Timestamp</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
