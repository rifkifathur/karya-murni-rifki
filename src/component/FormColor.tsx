import React, { useState, FormEvent, useEffect } from 'react';
import './Display.scss';
type props = {
    handleForm: (color: string) => void;
}

const FormColor = ({ handleForm }: props) => {
    const [color, setColor] = useState<string>("");

    //handle submit add new color
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        //validate string 
        let reg = /^#([0-9a-f]{3}){1,2}$/i;
        let check = reg.test(color);

        //send argument
        let validate = check ? handleForm(color) : (alert("Wrong input"));
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="color">Add new color : </label>
                <input type="text" id="color" onChange={(e) => setColor(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div >
    );
};

export default FormColor;