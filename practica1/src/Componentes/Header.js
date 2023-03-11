import React, {Component} from 'react';
import './Header.css';
import img from '../Wobble.gif';

class Header extends Component{
    render()
    {
        return(
            <div className='Header'>
                <img src={img}/>
            </div>
        );
    }
}
export default Header;