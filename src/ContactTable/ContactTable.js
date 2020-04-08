import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm'
import Button from '../component/Button/Button'
import {Link} from 'react-router-dom';
import './map.css'


class ContactTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [
               
            ]
        };
    }
    handleSubmit = (customer) => {
        this.setState({
            customers: [...this.state.customers, customer]
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>S/N</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Title of complaint</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.customers.map((customer, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{customer.Name}</td>
                                    <td>{customer.Number}</td>
                                    <td>{customer.DescriptionTitle}</td>
                                    <td ><Link to='/contact/complaint' className="link"><Button text="Details" /></Link></td>

<td></td> 
                                 </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div><ContactForm submit={this.handleSubmit} /></div>
                <div className="map-section">
              <iframe style={{border:"0", width: "100%", height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.848074569978!2d3.353871514449589!3d6.540861524776709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d6adf7d39e9%3A0xea85bba66ae64a23!2s(Enyata)!5e0!3m2!1sen!2sng!4v1585409845156!5m2!1sen!2sng" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
        );
    }
}

export default ContactTable;