import React, { Component } from 'react'

export default class Bio extends Component {
    render() {
        return (
            <div class="vanessa">
                        <img src="./images/van-pic.png" class="inline vanessa-photo" alt ="vanessa"/>
                        <div class="name inline">Vanessa Stevenson</div>
                        <p class="bio inline">
                            Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
                        </p>
                        <div class="inline button">SHARE RECIPE</div>
            </div>
        )
    }
}
