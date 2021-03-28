import axios from 'axios';


const Api = (data) => {
    console.log(data);
    return axios({
    url: "http://localhost:5000/email",
    method: 'POST',
    data: data

    });
}

export default Api;
