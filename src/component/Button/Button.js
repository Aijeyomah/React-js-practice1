import React, {Component} from 'react'
import './Button.css'
class Button extends Component{
    render(){
    
    
        return(
        <button >{this.props.text}</button>
        );
    }
}

export default Button