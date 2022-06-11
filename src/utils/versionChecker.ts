//fetch first entry from json object from url and then compare it to the cached version on the server every night at midnight and return boolean 
//at time fetch url
import fetch from "node-fetch";

const fetchVersionInfo = async() => {
    try {
    const url = `https://ddragon.leagueoflegends.com/api/versions.json`;

    const response = await fetch(url);
    const data:any = await response.json();
    return data.json[0];
    } catch (error) {
        console.log(error);
    }

}

export default fetchVersionInfo();

