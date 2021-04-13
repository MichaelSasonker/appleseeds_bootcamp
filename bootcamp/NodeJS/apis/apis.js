const request = require('request');
const axios = require('axios');
const nodeFetch = require('node-fetch');
const superagent = require('superagent');

const URL1 = 'https://geek-jokes.sameerkumar.website/api?format=json';


request({ url: URL1 }, (err, respone) => {
    console.log('------Request------');
    console.log(respone.body);
});

const GetAxios = async (url) => {
    const respone = await axios.get(URL1);
    console.log('------Axios------');
    console.log(respone.data);
}; GetAxios(URL1);

console.log('------Node-Fetch------');
nodeFetch(URL1).then(res => res.json()).then(data => console.log(data));

superagent.get(URL1).end((err, res) => {
    console.log('------Superagent------');
    console.log(res.body);
})
