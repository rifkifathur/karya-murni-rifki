import React from 'react';
import './Display.scss';

type props = {
    color: string[];
}
const DisplayColor = ({ color }: props) => {
    console.log(color)
    return (
        <div id='container'>
            {color.map((item, i) => {
                    return <div id="results" key={i} style={{ backgroundColor: item }}>{item}</div>
            })}
        </div>
    );
};

export default DisplayColor;