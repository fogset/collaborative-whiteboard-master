import React, { useState } from 'react';
import Board from '../board/Board';
import image from './Eraser.png';

import './style.css';

function Container({ room }) {
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(10);
    const [eraser, setEraser] = useState(false);

    const handleEraser = () => {
        console.log('this is:', this);
        setEraser(!eraser);

        console.log('if erase is:', color);
    }

    return (
        <div className="container">
            <div class="tools-section">

                <div className="color-picker-container">
                    {room}
                    Select Brush Color : &nbsp;
                    <input
                        type="color"
                        value={color}
                        onChange={(event) => { setColor(event.target.value); }}
                    />
                </div>

                <div className="brushsize-container">
                    Select Brush Size : &nbsp;
                    <select value={size} onChange={(event) => { setSize(event.target.value); }}>
                        <option> 5 </option>
                        <option> 10 </option>
                        <option> 15 </option>
                        <option> 20 </option>
                        <option> 25 </option>
                        <option> 30 </option>
                    </select>
                </div>

                <div className="brushsize-container">
                    <button onClick={handleEraser}>
                        Eraser
                        {(eraser === false) ? <div> false </div> : <div> true </div>}
                    </button>
                </div>

                <div className="brushsize-container">
                    <img className="eraserImage" src={image} alt="Logo" />
                </div>
            </div>

            <div class="board-container">
                <Board
                    color={(eraser === false) ? color : "#FFFFFF"}
                    size={size}
                //roomId={this.containerRoomId}
                >
                </Board>
            </div>
        </div>
    )
}

export default Container;

