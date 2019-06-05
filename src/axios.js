// make a instance to overwrite default 

import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'Auth Token from instace';

export default instance;