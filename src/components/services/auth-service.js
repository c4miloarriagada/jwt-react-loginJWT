import axios from 'axios';


const signup = (email, password)=>{
    return axios
        .post("http://localhost:8000/auth/login",{
            email, password
        })
        .then((response)=>{
            if(response.data.token){
                localStorage.setItem('user', JSON.stringify(response.data))
            }
        return response.data
        })
}


const register = (name, password, email)=>{

    return axios
        .post("http://localhost:8000/users/",{
           name, email, password
        })
        .then((response)=>{
            if(response.data.token){
                localStorage.setItem('user', JSON.stringify(response.data))
            }
        return response.data
        })
}


const logout = ()=>{
    localStorage.removeItem('user')
}

const getCurrentUser = ()=>{
    return JSON.parse(localStorage.getItem('user'))
}


const authService ={
    signup,
    register,
    logout,
    getCurrentUser

}

export default authService