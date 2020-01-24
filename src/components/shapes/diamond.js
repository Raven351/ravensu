import React, {Component} from 'react'
import Konva from 'konva'
import { render } from 'react-dom'
import {Stage, Layer, Shape} from 'react-konva'

const Diamond = () =>{
    return(
        <Stage width={100} height={100}>
            <Layer>
                <Shape
                    sceneFunc={(context, shape) => {
                        context.beginPath();
                        context.moveTo(40, 0);
                        context.lineTo(100, 0);
                        context.lineTo(60,100);
                        context.lineTo(0, 100);
                        // context.moveTo((window.innerWidth/10)*4, 0);
                        // context.lineTo(window.innerWidth, 0);
                        // context.lineTo((window.innerWidth/10)*6,window.innerHeight);
                        // context.lineTo(0, window.innerHeight);
                        context.closePath();
                        // (!) Konva specific method, it is very important
                        context.fillStrokeShape(shape);
                    }}
                    fill="#00D2FF"
                    stroke="black"
                    strokeWidth={4}
                />
            </Layer>
        </Stage>
    )
}

export default Diamond