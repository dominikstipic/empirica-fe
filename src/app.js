import {InfoPanel} from "./infoPanel.js"
import {Canvas} from "./canvas.js"

import React, { Component } from 'react'
import './index.css'


export class App extends Component {
    constructor(props){
        super(props);
        this.info = React.createRef();
    }


    render() {
        return (
        <div className="app">
            <div className="leftContainer">
            </div>
            <div className="centerContainer">
                <Canvas info={this.info} width={this.props.width} height={this.props.height}/>
            </div>
            <div class="rightContainer">
                <InfoPanel ref={this.info} />
            </div>
        </div>
        )
    }

}