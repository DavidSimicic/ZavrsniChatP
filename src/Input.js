import {Component} from "react";
import React from "react";

class Input extends Component {
  state = {
    text: ""
  }

  onChange(e) {
    this.setState({text: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    if(this.state.text !== "") {
        this.props.onSendMessage(this.state.text);
        this.setState({text: ""});
    } else {
        alert ('Upišite poruku u chat')
    }
    
}

  render() {
    return (
      <div className="Input">
        <form onSubmit={e => this.onSubmit(e)}>
          <input
            onChange={e => this.onChange(e)}
            value={this.state.text}
            type="text"
            placeholder="Upišite poruku i pretisnite ENTER"
            autoFocus={true}
          />
          <button>Pošalji</button>
        </form>
      </div>
    );
  }
}

export default Input;
