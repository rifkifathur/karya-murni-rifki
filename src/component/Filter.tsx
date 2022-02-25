import React, { useState } from 'react';
type props = {
    handleFilter: (rgb: string) => void;
}
const Filter = ({handleFilter}: props) => {

    const tester = (e: string) => {

        //send argument
        handleFilter(e)
    }
    return (
        <div>
            <label htmlFor="red">red {`>`} 50%</label>
            <input type="checkbox" id="red" value="127" onChange={(e) => tester(e.target.value)} />
            <label htmlFor="green">green {`>`} 50%</label>
            <input type="checkbox" id="green" value="127" onChange={(e) => tester(e.target.value)} />
            <label htmlFor="blue">blue {`>`} 50%</label>
            <input type="checkbox" id="blue" value="127" onChange={(e) => tester(e.target.value)} />
        </div>
    );
};

export default Filter;