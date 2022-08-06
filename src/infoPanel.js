import React, { Component } from 'react'

export class InfoPanel extends Component{

    constructor(props){
        super(props);
        this.classes = [React.createRef(), 
                        React.createRef(), 
                        React.createRef()];
    }   

    getSelectedClassColor(){
        for(let c of this.classes){
            if(c.current.checked){
                return c.current.value;
            }
        }
    }

    render(){
        return (
        <div id="radio">
            <input ref={this.classes[0]} class="radioElement" type="radio" id="class1" name="class" value="red"/>
                <label for="class1">class 1</label>
            <input ref={this.classes[1]} class="radioElement" type="radio" id="class2" name="class" value="green"/>
                <label for="class2">class 2</label>
            <input ref={this.classes[2]} class="radioElement" type="radio" id="class3" name="class" value="blue"/>
                <label for="class3">class 3</label>
        </div>)
    }
}
