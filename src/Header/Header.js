import React  from 'react'
import './Header.css'
import Button from '../component/Button/Button'
import Input from '../component/Input/Input.js'
import {Link} from 'react-router-dom';


class Header extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <div className="menu">
                <Link to='/'><span className="logo">Academy</span></Link>
					<Link to='/' className="link"><span>Home</span></Link>
					<Link to='/about' className="link"><span>About</span></Link>
					<Link to='/' className="link"><span>Services</span></Link>
					<Link to='/contact' className="link"><span>Contact</span></Link>
                </div>
                <div className="right">
                    <Input className='search'/>
                    <Button text= 'options'/>
                </div>
            </div>
        )
    }
}
export default Header