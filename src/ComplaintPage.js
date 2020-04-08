import React, {Component} from 'react';


class Complaint extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters:[]
        }
    }

    render(){
        return(
            <div>
                <p>jokhj</p>
                <p>Contact:{}</p>
                <p>location:{}</p>
                <p>title:{}</p>
                <p>description:{}</p>
            </div>
        )
    }
}

export default Complaint;
