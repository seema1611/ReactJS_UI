import React,{Component} from 'react';
import '../css/Styles.css';

class Content extends Component{
    render(){
        return(
            <div className="content">
                <div className="middle-header">
                    <p>Pricing</p>
                </div>

                <div className="middle-content-first">
                <p>Quickly build an effective pricing table for your potential </p>
                </div>

                <div className="middle-content-last">
                <p>customers with this layout.Its built with default </p> 
                </div>

                <div className="middle-content-last">
                <p>Material UI Components with little customization</p>
                </div>
            </div>
        )
    }
}

export default Content;