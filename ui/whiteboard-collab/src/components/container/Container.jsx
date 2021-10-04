import React, { useEffect, useState } from 'react';
import Board from '../board/Board';
import image from './Eraser.png';
import imageEnabled from './Eraser2.png';

import './style.css';

function Container({ room }) {
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(10);
    const [eraser, setEraser] = useState(false);


    const handleEraser = () => {
        setEraser(!eraser);
        console.log('this is:', this);
    }

    return (
        <div className="container">

            <div class="tools-section">

                <h3> Welcome to your room: {room} </h3>
                <div className="color-picker-container">
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
                        <option> 40 </option>
                        <option> 50 </option>
                    </select>
                </div>

                <div className="brushsize-container">
                    <button onClick={handleEraser}  >
                        Eraser
                        {(eraser === false) ? <div> disabled </div> : <div> enabled </div>}
                    </button>
                </div>

                <div className="brushsize-container">
                    <img className="eraserImage" src={(eraser === false) ? image : imageEnabled} alt="Logo" onClick={handleEraser}/>
                </div>
            </div>

            <div class="board-container">

                {(room === null) ?
                    <h1>please enter your room id</h1> :
                    <Board
                        color={(eraser === false) ? color : "#FFFFFF"}
                        size={size}
                        room={room}
                    >
                    </Board>
                }
            </div>
        </div>
    )
}

export default Container;

