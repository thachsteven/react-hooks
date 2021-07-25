import React from 'react';
import useMagicColor from './../../hooks/useMagicColor';
import './styles.scss'

MagicBox.propTypes = {

};

function MagicBox() {
    const color = useMagicColor();

    return (
        <div className="magic_box" style={{ backgroundColor: color }}></div>
    );
}

export default MagicBox;