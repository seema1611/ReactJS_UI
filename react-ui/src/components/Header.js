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
        
                <div className="btn">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>

                </div>
            </div>
            <ul>
              <li><a href="#">FEATURE</a></li>
              <li><a href="#">ENTERPRISES</a></li>
              <li><a href="#">SUPPORT</a></li>
              <li><a href="#">LOGIN</a></li>
            </ul>
        
        </nav>
        )
    }
}


export default Navbar;