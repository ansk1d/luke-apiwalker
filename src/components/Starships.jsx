import React,{ useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default () => {
    const {id} = useParams();
    const [Starships,setStarships]=useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/starships/${id}`)
            .then(response => setStarships(response.data))
    })
    return(
        <div>
            <h1>{Starships.name}</h1>
            <p>Model : {Starships.model}</p>
            <p>Manufacturer : {Starships.manufacturer}</p>
            <p>Length : {Starships.length}</p>
            <p>Crews : {Starships.crews}</p>
        </div>
    );
}