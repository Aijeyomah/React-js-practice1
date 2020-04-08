import React, { useState} from "react";
import FormInput from "../FormInput/FormInput";
import "./Form.css";
import Button from "../Button/Button";

const Form=(props)=>{
const [state, setState]=  useState({
  name: "",
  job: "",
  income: ""

})

 const handleChange = (e) => {
    setState({
      ...state,
  [e.target.name]: e.target.value
  
    });
  };
  const submitForm = (e )=> {
    e.preventDefault();
    props.submit(state)
    setState({
      name:'',
      job: '',
      income:''
    })
    
  }

 
    return (
      <form>
        <FormInput label="Name" name="name" value={state.name} change={handleChange} />
        <FormInput label="Job" name="job" value={state.job} change={handleChange} />
        <FormInput label="Income" name="income" value={state.income} change={handleChange} />
       <span className="submit" onClick={submitForm}><Button text ="Add" type="button"/> </span>
      </form>
    );

}
export default Form;