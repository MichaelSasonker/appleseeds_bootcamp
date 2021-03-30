import Axios from 'axios';

const BASE_URL = '//restcountries.eu/rest/v2/all';

const GetData = async () => {
    let respone = await Axios.get(BASE_URL);
    return (respone.data);
}

export default GetData;