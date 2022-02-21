import React, { Component } from "react";

export class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      Email: "",
    };
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
  }
  //   ChangeUserName(event) {
  //     this.setState({ value: event.target.value });
  //   }
  //   ChangeEmail(event) {
  //     this.setState({ value: event.target.value });
  //   }
  handleUserChange(event) {
    this.setState({ name: event.target.value });
  }
  handleEmailChange(event) {
    this.setState({ name: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    // alert(`${userName}`);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              onChange={this.handleEmailChange}
              name={this.state.Email}
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
              onChange={this.handleUserChange}
              name={this.state.userName}
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
}

export default State;
