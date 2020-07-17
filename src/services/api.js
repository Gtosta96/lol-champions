import axios from 'axios'


const api = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/10.14.1/data/en_US/champion.json'
})

const apiV2 = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})


export {api, apiV2}
