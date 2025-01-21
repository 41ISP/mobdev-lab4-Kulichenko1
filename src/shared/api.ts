import axios from 'axios';

const apiURL = 'https://api.thecatapi.com/v1/images/search?limit=10'

const fetchdata = async() => {
    try{
        const response = await axios.get(apiURL);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
export default fetchdata();