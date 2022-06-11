import { useState, useEffect } from "react";


const Champs = () => {
    const [champs, setChamps] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [champ, setChamp] = useState(null);
    const [champId, setChampId] = useState(null);
    const [champName, setChampName] = useState(null);
    const [champImg, setChampImg] = useState(null);
    const [champLore, setChampLore] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/10.16.1/data/en_US/champion.json`);
            const data = await res.json();
            setChamps(data.data);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        
    )
