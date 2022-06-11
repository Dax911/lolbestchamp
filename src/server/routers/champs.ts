const url = `http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json`;

export const fetchInfo = async() => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export default async function handler(req: any, res: any) {
    const result = await fetchInfo();
    console.log(result);
    res.status(200).json(result);
}