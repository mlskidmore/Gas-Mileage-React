import React from "react";
import './Components.css';

console.log("Cost Text Box ...");

const Cost = () => {

    return (
        <input type="text" className='component-item' defaultValue="Cost" /*value={this.state.value} onChange={this.handleChange}*/>
        </input>
    );
}

export default Cost;