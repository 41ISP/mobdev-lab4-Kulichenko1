import axios from 'axios';
import { ICatBreed } from '../entities/catFacts/catFacts.rdo';

const apiURL = 'https://api.thecatapi.com/v1/images/search?limit=10'

const CatApi = {
    fetchdata: async() => {
        try{
            const response = await axios.get<ICatBreed[]>(apiURL);
            // console.log(response.data);
            return response.data
        } catch (error) {
            console.log(error);
        }
}

}
export default CatApi;