import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Survey = (props) => {
    const [option, setOption] = useState("people");
    const [id, setId] = useState("");
    const history = useHistory();

    const lukeHandler = (e) => {
        e.preventDefault();
        history.push(`/${option}/${id}`);
    }

    return (
        <form onSubmit={lukeHandler}>
            <label>Search for :</label>
            <select onChange={(e) => setOption(e.target.value)}>
                <option value="">Select</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="starships">Starships</option>
            </select>
            <label>ID :</label>
            <input type='Number' onChange={(e) => setId(e.target.value)}></input>
            <input type="submit" value="Search" />
        </form>
    );
}
export default Survey;