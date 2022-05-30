import React, {useState} from "react";
import authService from "../services/auth-service";
import { useNavigate } from "react-router-dom";


const Register = ()=>{
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()


    const handleRegister = async(e)=>{
        e.preventDefault();
        try {
            await authService.register(name, password,email,role).then(
                (response)=>{
                    navigate('/')
                    window.location.reload()
                }
            )
        } catch (error) {
            console.log(error)
        }
    }
    return (
      <div>

        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="name"
            onChange={(e) => setName(e.target.value)}
            
          />
        <input
            type="text"
            value={password}
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            value={email}
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={role}
            name="role"
            placeholder="rol"
            onChange={(e) => setRole(e.target.value)}
          />
          <button>Register</button>
        </form>
      </div>
      );

}


export default Register