import React,{Component} from 'react';
import Header from './Header.css';

class Content extends Component{
    render(){
        return(
            <div className="content">
                <div className="middle-header">
                    <h1>Pricing</h1>
                </div>

                <div className="middle-content-first">
                <p>Quickly build an effective pricing table for your potential </p>
                </div>

                <div className="middle-content-last">
                <p>customers with this layout.Its built with default </p> 
                <p>Material UI Components with little customization</p>
                </div>
            </div>
        )
    }
}

export default Content;