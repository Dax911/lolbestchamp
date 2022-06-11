
const imageBaseURL = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_{num}.jpg'



export async function getChamps() {
const requestChamListURL = 'http://ddragon.leagueoflegends.com/cdn/12.11.1/data/en_US/champion.json'

const response = await fetch(requestChamListURL)


const request = new Request(requestChamListURL)
const response = await fetch(request)

const champions = await response.json()
const n = 2
const championsA = champions['data'][n]

return championsA
}


