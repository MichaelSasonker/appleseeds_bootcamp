import axios from 'axios';
import Axios from 'axios';
import CancelRquest from './cancel_request_20.1';

const GetData = async (url) => {

    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();

    let respone = await Axios.get(url, { cancelToken: source.token} );
    return respone.data;
}

export default GetData;