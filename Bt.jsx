import * as React from "react";
import "./App.css";

function Bt(props) {
  return (
    <div className="App">
      <img src={props.images} />
      <label>
        {props.likes} {props.comments} {props.shares}
      </label>
    </div>
  );
}
export default Bt;
