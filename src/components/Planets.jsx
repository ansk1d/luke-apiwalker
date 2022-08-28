import React,{ useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default () => {
    const {id} = useParams();
    const [planets,setPlanets]=useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => setPlanets(response.data))
    })
    return(
        <div>
            <h1>{planets.name}</h1>
            <p>Diameter :{planets.diameter}</p>
            <p>Climate : {planets.climate}</p>
            <p>Gravity : {planets.gravity}</p>
            <p>Terrain : {planets.terrain}</p>
        </div>
    );
}