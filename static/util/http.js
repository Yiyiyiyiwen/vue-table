import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';

export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
      axios.get(url,{
        params:params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }