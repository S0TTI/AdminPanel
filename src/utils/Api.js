import axios from 'axios';

export default axios.create({

    BaseUrl: "https://randomuser.me/api/",
    responseType: "json"
});