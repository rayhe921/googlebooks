import React from "react";
import "./style.css";

function CardWrapper(props) {
return <div> <p>{props.title}</p>
    <div className="cardWrapper">{props.children}</div>;
  </div>
}

export default CardWrapper;
