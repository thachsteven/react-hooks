import React, { useState } from 'react';

ColorBox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['yellow', 'orange', 'black', 'pink', 'green']
    const colorIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[colorIndex];
}

function ColorBox() {

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('color-box') || 'red';
        console.log(initColor)
        return initColor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('color-box', newColor)
    }

    return (
        <div className="color-box" style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            ColorBox
        </div>
    );
}

export default ColorBox;