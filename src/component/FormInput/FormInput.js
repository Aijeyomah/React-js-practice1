import React, { Component } from "react";
import "./FormInput.css";

class FormInput extends Component {
 
  render() {
    return (
      <div className="form__input__wrap">
        <label>{this.props.label}</label>
        <br />
        <input
          className="form__input"
          type="text"
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.change}
        />
      </div>
    );
  }
}

export default FormInput;
