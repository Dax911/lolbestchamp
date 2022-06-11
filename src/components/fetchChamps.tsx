import axios from "axios";
import { useEffect, useState } from "react";

export default function ChampionsEndPointData() {
    const [championsData, setChampionsData] = useState( [] );

    useEffect( () => {
        getAllChampions()

    }, [] );

    const url = "https://ddragon.leagueoflegends.com/cdn/9.21.1/data/en_US/champion.json";

    const getAllChampions = () => {
        axios.get( url ).then( res => {
            const setChampionsData = res.data.data;
        } )
            .catch( err => 
                console.log( err ));
    }
    return ( championsData );


}

//fetch champion.json
//randomly pick a champion like so champion[n] where it calls a random number that 
//is in the range of the length of the array of champions.

//then pass the needed feilds to the component and display the champion's name,
//also use data to parse needed data to another request to get the image url etc.

