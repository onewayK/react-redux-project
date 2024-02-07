import React from "react";

const Select = ({id, name, onChange, optionData}) => {
    return (
        <select id={id} name={name} className={"form-control"} onChange={onChange}>
            <option value={0}>전체</option>
            {optionData ? optionData.map((option, index) => {
                return <option key={index} value={option}>{option}</option>
            }) : ""}

        </select>
    );
}

export default Select;