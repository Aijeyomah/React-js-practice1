import React, { Component } from 'react';
import ContactTable from '../ContactTable/ContactTable'

 
class Contact extends Component {
    render() { 
        return (
            <div>
          {<ContactTable/>}
            </div>
        );
    }
}
 
export default Contact;