import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Toggle.css'

const Toggle = () => {
    const { darkMode } = useContext(AuthContext);
    
    const handlerDarkMode = (e) => {
        const value = e.target.checked;
        darkMode(value);
    }

    return (
        <div>
            <li className="tg-list-item">
                <input onClick={handlerDarkMode} className="tgl tgl-ios" id="cb2" type="checkbox" />
                <label className="tgl-btn" htmlFor="cb2"></label>
            </li>

        </div>
    );
};

export default Toggle;