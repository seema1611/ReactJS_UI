import React,{Component} from 'react';
import '../css/Styles.css';

class Navbar extends Component {

    render() {
        return (
        <nav>
            <div className="logoBtn">
                <div className="logo">
                <p>Company name</p>
                </div>
            </div>
            <ul>
              <li><button className="button">FEATURE</button></li>
              <li><button className="button">ENTERPRISES</button></li>
              <li><button className="button">SUPPORT</button></li>
              <li><button className="button-login">LOGIN</button></li>
            </ul>
        
        </nav>
        )
    }
}


export default Navbar;