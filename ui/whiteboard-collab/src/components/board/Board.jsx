import React, { useState, useEffect, useLayoutEffect } from 'react';
import io from 'socket.io-client';
import './style.css';

var ctx;
var canvas;
var last_mouse;
var mouse;
//var timeout;

function Board({ color, size }) {
    var timeout;

    useLayoutEffect(() => {
        setUpImage()
    }, []);

    useEffect(() => {
        drawImage()
    }, [color, size]);

    function setUpImage() {
        canvas = document.querySelector('#board');
        ctx = canvas.getContext('2d');

        //console.log("ctx" + ctx + " canvas: " + canvas + "ctxMain" + ctxMain)

        var sketch = document.querySelector('#sketch');
        var sketch_style = getComputedStyle(sketch);
        canvas.width = parseInt(sketch_style.getPropertyValue('width'));
        canvas.height = parseInt(sketch_style.getPropertyValue('height'));

        mouse = { x: 0, y: 0 };
        last_mouse = { x: 0, y: 0 };

        /* Mouse Capturing Work */
        canvas.addEventListener('mousemove', function (e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);
    }

    function drawImage() {
        /* Drawing on Paint App */
        ctx.lineWidth = size;
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
        console.log("line color" + ctx.strokeStyle)

        canvas.addEventListener('mousedown', function (e) {
            canvas.addEventListener('mousemove', onPaint, false);
        }, false);

        canvas.addEventListener('mouseup', function () {
            canvas.removeEventListener('mousemove', onPaint, false);
        }, false);

        var root = this;
        var onPaint = function () {
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();
            //if (root.timeout != undefined) clearTimeout(root.timeout);
            setTimeout(function () {
                var base64ImageData = canvas.toDataURL("image/png");
                console.log(base64ImageData);
            }, 1000);

        };
    }

    return (
        <div class="sketch" id="sketch">
            {color} {size}
            <canvas className="board" id="board"></canvas>
        </div>
    );
}

export default Board;


