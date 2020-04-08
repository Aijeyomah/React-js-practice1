import React, { Component } from 'react';
import ContactFormInput from '../Contact/ContactFormInput/ContactFormInput'
import Button from '../component/Button/Button'

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Number: '',
            Location: '',
            DescriptionTitle: '',
            Description: ''
        }
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitForm = (event) => {
        event.preventDefault()
        this.props.submit(this.state);
        this.setState({
            Name: '',
            Number: '',
            Location: '',
            DescriptionTitle: '',
            Description: ''
        })
    }

    render() {
        return (
            <form>
                <ContactFormInput label='Name' name='Name' value={this.state.Name} change={this.handleChange} />
                <ContactFormInput label='PhoneNumber' name='Number' value={this.state.Number} change={this.handleChange} />
                <ContactFormInput label='Location' name='Location' value={this.state.Location} change={this.handleChange} />
                <ContactFormInput label='Title of Complaint' name='DescriptionTitle' value={this.state.DescriptionTitle} change={this.handleChange} />
                <ContactFormInput label='Description' name='Description' value={this.state.Description} change={this.handleChange} />
                <span className="submit" onClick={this.submitForm}><Button text="Add" type="button" /> </span>



            </form>
        );
    }
}

export default ContactForm;