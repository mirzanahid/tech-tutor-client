import React from 'react';
import './Toggle.css'

const Toggle = () => {
    return (
        <div>
            <li class="tg-list-item">
                <input class="tgl tgl-ios" id="cb2" type="checkbox" />
                <label class="tgl-btn" for="cb2"></label>
            </li>

        </div>
    );
};

export default Toggle;