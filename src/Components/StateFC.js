import React, { useState } from "react";

function StateFC() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("shiva");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("hello");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlfor="exampleFormInput2" className="form-label">
            UserName
          </label>
          <input
            type="Username"
            className="form-control"
            id="exampleFormControlInput"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Shiva"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button type="onSubmit">submit</button>
      </form>
    </div>
  );
}

export default StateFC;
