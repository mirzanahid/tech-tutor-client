import React from 'react';
import './Toggle.css'

const Toggle = () => {
    return (
        <div>
            <li className="tg-list-item">
                <input className="tgl tgl-ios" id="cb2" type="checkbox" />
                <label className="tgl-btn" htmlFor="cb2"></label>
            </li>

        </div>
    );
};

export default Toggle;