import React, { Component } from 'react'

export class InfoPanel extends Component{
    render(){
        return (
        <div class="info">
            <h1>Number of Classes</h1>
            <input type="radio" id="age1" name="age" value="1"/>
                <label for="age1">1 class</label>
            <input type="radio" id="age2" name="age" value="2"/>
                <label for="age2">2 classes</label>
            <input type="radio" id="age3" name="age" value="3"/>
                <label for="age3">3 classes</label>
        </div>)
    }
}
