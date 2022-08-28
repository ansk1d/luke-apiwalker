import React,{ useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default () => {
    const {id} = useParams();
    const [people,setPeople]=useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => setPeople(response.data))
    })
    return(
        <div>
            <h1>{people.name}</h1>
            <p>Height : {people.height}</p>
            <p>Mass : {people.mass}</p>
            <p>Gender : {people.gender}</p>
            <p>Birth Year : {people.birth_year}</p>
        </div>
    );
}