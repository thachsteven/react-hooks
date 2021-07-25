import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from './../../hooks/useClock';
import './styles.scss'

BetterClock.propTypes = {};

function BetterClock(props) {
    const { timeString } = useClock();

    return (
        <div className="betterClock">
            <p className="betterClock__time">
                {timeString}
            </p>
        </div>
    );
}

export default BetterClock;