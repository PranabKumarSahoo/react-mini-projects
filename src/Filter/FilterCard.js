import React, { useState } from "react";
import './Filter.css';
import data from "./data.json";

const FilterCard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <div className="templateContainer">
                <div className="searchInput_Container">
                    <input id="searchInput" type="text" placeholder="Search here..." onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                </div>
                <div className="template_Container">
                    {
                        data
                            .filter((val) => {
                                if (searchTerm === "") {
                                    return val;
                                } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val;
                                }
                            })
                            .map((val) => {
                                return (
                                    <div className="template" key={val.id}>
                                        <img src={val.image} alt="" />
                                        <h4>{val.title}</h4>
                                        <p className="price">${val.price}</p>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </>
    )
}

export default FilterCard;