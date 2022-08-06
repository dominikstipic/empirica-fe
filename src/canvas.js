import React, { Component } from 'react'

class Point{
    radius = 5;

    constructor(x, y, class_color){
        this.x = x;
        this.y = y;
        this.class_color = class_color;
    }

    draw(ctx) {
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.class_color;

        ctx.fill();
    }

    minus(p){
        return new Point(this.x - p.x, this.y - p.y);
    }

    norm(){
        return Math.sqrt(this.x**2 + this.y**2)
    }
}

export class Canvas extends Component{
    constructor(props){
        super(props);
        this.state = {points:[]};
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext('2d');
     }

    render(){
        return (
            <canvas width={this.props.width} height={this.props.height} ref={this.canvasRef} onClick={(e) => this.clickHandler(e)}/>
        )
    }

    clickHandler(e){
        const x = e.clientX;
        const y = e.clientY;
        const color = this.props.info.current.getSelectedClassColor();
        const p = new Point(x,y,color);
        this.update(p)
    }

    update(new_point){
        const radius = new_point.radius;
        var flag = true;
        for(let p of this.state["points"]){
            const distance = new_point.minus(p).norm();
            if(distance <= 2*radius){
                flag = false;
                break;
            }
        }
        if(flag){
            this.state['points'].push(new_point);
            new_point.draw(this.ctx)
        }
    }
}