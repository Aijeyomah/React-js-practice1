import React from 'react';
import './App.css';
import Header from './Header/Header';
import Table from './component/Table/Table';
import {Switch, Route} from 'react-router-dom';
import About from './component/Pages/About/About'
import Name from './component/Pages/Names/Name'
import Contact from './Contact/contact'
import Complaint from './ComplaintPage'


function App () {
        return (
        <div className="App">
        <Header />
        <Switch >
        <Route exact path='/' component={Table} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/contact/:complaint' component={Complaint} />
        <Route exact path='/about/:name' component={Name} />


        <Route exact path='/name' render={()=>(<div>Hello this is a new page</div>)} />
        </Switch>
        </div>
    )
}
export default App