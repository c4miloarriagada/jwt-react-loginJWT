import authHeader from "./auth-header";
import axios from 'axios'



const getUsers = ()=>{
    return axios.get('http://localhost:8000/users',{headers: authHeader()});
}

const getProducts = ()=>{
    return axios.get('http://localhost:8000/products/')
}


const privateRoutes ={
    getUsers,
    getProducts
}

export default privateRoutes