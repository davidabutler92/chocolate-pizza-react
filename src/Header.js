import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <div className="center">
        <section className="header inline">
            <div className="inline">
                <img className="logo" src="/images/logo.png" alt="logo" />
            </div>
            <div className="inline">
                <h1 className="cursive">Delicious</h1>
                <p className="description">THE BEST FOOD BLOG ON THE WEB</p>
            </div>
            <div className="inline social-tags-div">
                <img src="./images/fb-icon.png" className="socials" alt="facebook"/>
                <img src="./images/twit-icon.png" className="socials" alt="twitter"/>
                <img src="./images/gp-icon.png" className="socials" alt="google"/>
                <img src="./images/insta-icon.png" className="socials" alt="instagram"/>
                <img src="./images/flic-icon.png" className="socials" alt="flickr"/>
                <img src="./images/pint-icon.png" className="socials" alt="pinterest"/>
                <img src="./images/rss-icon.png" className="socials" alt="rss"/>
                <img src="./images/mail-icon.png" className="socials" alt="mail"/>
            </div>
            <div className="line" style={{backgroundImage: 'url(./images/hr-img.png)'}}></div> 
        </section>
        </div>
        )
    }
}
