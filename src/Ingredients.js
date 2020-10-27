import React, { Component } from 'react'

export default class Ingredients extends Component {
    render() {
        return (
        <section>
            <div className="ingredients" style={{backgroundImage: 'url(./images/list-bg.png)'}}>
                        <ul className="inline">
                            <li>1 1/2 cups milk</li>
                            <li>1/2 cup mascarpone</li>
                            <li>1/2 tsp pink salt</li>
                            <li>1 lb Black Mission Figs</li>
                            <li>1/2 cup brown sugar</li>
                            <li>2-3 tbsp water</li>
                        </ul>
                        <ul className="inline">
                            <li>1 1/2 cups heavy cream</li>
                            <li className="strike">1/3 granulated sugar</li>
                            <li className="strike">2 egg yolks</li>
                            <li>1 lemon, juiced</li>
                            <li>2 tbsp butter</li>
                            <li>1 cup honey roasted pecans, roughly chopped</li>
                        </ul>
                    </div>
            <div className="line" style={{backgroundImage: 'url(./images/hr-img.png)'}}></div> 
        </section>
            
        )
    }
}
