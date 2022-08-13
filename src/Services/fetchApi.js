import axios from "axios";

// Live API using CatAPI:
// https://documenter.getpostman.com/view/5578104/RWgqUxxh#3cd6ebfd-338d-4a38-9929-f879a6bb0bd1
async function fetchCats() {
    const { data } = await axios.get('https://api.thecatapi.com/v1/breeds?limit=10&page=0')
    return data
}
    
export default fetchCats;