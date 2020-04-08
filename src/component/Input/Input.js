import React, {Component} from 'react';
import './Input.css';

class Input extends Component{
    render() {
        return (
            <input className='Search' type='text' placeholder='Search' />
        );
    }
}

export default Input;