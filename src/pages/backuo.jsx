import React, { Component } from "react";
import { connect } from "react-redux";
import {
  add_reminder,
  deletereminder,
  clearrlinder,
  editereminder,
} from "../action/actionliste.js";
class Home extends Component {
  state = {
    id: 0,
    text: "",
    date: "",
    ischanging: false,
  };
  handlechange(id) {
    this.setState({ ischanging: !this.state.ischanging });
    let selected = this.props.listedata.filter((item) => item.id === id)[0];
    // console.log("selected on " , selected);
    this.setState({
      id,
      text: selected.text,
      date: selected.date,
    });
  }

  subchange() {
    this.props.editereminder(this.state.id, this.state.date, this.state.text);

    this.setState({
      ischanging: false,
    });
  }

  render() {
    const todoremind = this.props.listedata.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.text}</h3>
          <p>{item.date}</p>
          <div
            onClick={() => {
              this.props.deletereminder(item.id);
            }}
          >
            {" "}
            Delete
          </div>
          <div
            onClick={() => {
              this.handlechange(item.id);
            }}
          >
            {" "}
            Edite
          </div>

          <hr />
        </div>
      );
    });

    if (this.state.ischanging) {
      return (
        <div>
          <h1>Reminder Apllication using Redux</h1>
          <img src="" alt="" />

          <div>
            <label>Date</label>
            <input
              type="date"
              name="when"
              onChange={(e) => {
                this.setState({ date: e.target.value });
              }}
            />
          </div>

          <div className="mb-3">
            <label>What to do :</label>
            <input
              name="what"
              value={this.state.text}
              onChange={(e) => {
                this.setState({ text: e.target.value });
              }}
            />
          </div>

          <div>
            <div>
              <button
                onClick={() => {
                  this.subchange();
                }}
              >
                save
              </button>
            </div>

            <div>
              <button
                onClick={() =>
                  this.setState({
                    ischanging: false,
                  })
                }
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>{todoremind}</div>
          <div>
            <input
              type="text"
              name="text"
              onChange={(e) => {
                this.setState({ text: e.target.value });
              }}
            />
            <input
              type="date"
              name="date"
              onChange={(e) => {
                this.setState({ date: e.target.value });
              }}
            />
            <button
              type="submit"
              onClick={() => {
                this.props.add_reminder(this.state.text, this.state.date);
              }}
            >
              Add person
            </button>

            <button
              type="submit"
              onClick={() => {
                this.props.clearrlinder();
              }}
            >
              Clear all{" "}
            </button>
          </div>
        </div>
      );
    }
  }
}
function mapStatetoProps(state) {
  return { listedata: state };
}

export default connect(mapStatetoProps, {
  add_reminder,
  deletereminder,
  clearrlinder,
  editereminder,
})(Home);
