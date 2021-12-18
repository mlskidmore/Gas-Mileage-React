import React, { useState } from "react";
import { Label } from "reactstrap";
import './Components.css';

const AutomobileMenu = ({ title, autos = [] }) => {

    console.log("Automobile Menu ...");
    console.log("Title: " + title);

    //const [autos, setAutos] = useState(props.autos);
    const [selectedValue, setSelectedValue] = useState({

        value: 1,
        label: "1993 Honda Accord SE"

    });
    // print each auto to the console

    autos.forEach((id, auto) => {
        console.log(id, auto);
    })

    return (

        <div >
            <select defaultValue={selectedValue} className="component-item">
                {autos.map(auto => (
                    <option key={auto.id} defaultValue={auto.auto}>
                        {auto.auto}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default AutomobileMenu;