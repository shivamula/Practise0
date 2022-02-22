import React from "react";
import StateFC from "./StateFC";
function Props(props) {
  return (
    <div>
      <StateFC onSubmit={props.handleSubmit} />
    </div>
  );
}

export default Props;
