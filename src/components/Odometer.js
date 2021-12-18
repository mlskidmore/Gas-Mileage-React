import React from "react";
import './Components.css';

console.log("Odometer Text Box ...");

const Odometer = () => {

    return (
        <input type="text" className='component-item' defaultValue="Odometer"/*value={this.state.value}*/ /*onChange={this.handleChange}*/>
        </input>
    );
}

export default Odometer;