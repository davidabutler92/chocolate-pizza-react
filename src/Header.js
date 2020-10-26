import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
        <div className="body">
        <header className="header">
            <img className="" alt="" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
        )
    }
}
