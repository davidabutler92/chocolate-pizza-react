import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                 <hr />
                <img src="./images/small-logo.png" className="small-logo" alt="small-logo"/>
                <p className="grey">Delicious &#169; 2013 &#8226; All Rights Reserved.</p>
                <p className="grey">Proudly published with Ghost.</p>
            </div>
        )
    }
}
