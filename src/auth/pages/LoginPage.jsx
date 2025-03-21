import '../styles/auth.css';
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

import { useForm } from '../../hook/useForm';
import { Link } from 'react-router-dom';

import { fetchLogin } from '../fetch/fetchs';


export const LoginPage = () => {
   const { login } = useContext(AuthContext);
   const {email, password, onInputChange, data, onShowPassword, showPassword} = useForm({ email: '', password: '' });

  const onLogin = async(e) => {
    e.preventDefault()
    const result = await fetchLogin(data);
    if (result.error_msg) {
      alert(result.error_msg);
    }else{
      login();
    }
  }

  return (
    <div className='auth-container'>
      <div className='form-container'>
        <form>
        <h2>Iniciar sesion</h2>
          <div className='container-form-group'>
            <div className='form-group'>
              <label>Email</label>
              <input type="text" name='email' value={email} onChange={onInputChange}/>
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input type={showPassword ? 'text': 'password'} name='password' value={password} onChange={onInputChange}/>
              <button onClick={onShowPassword}>O_O</button>
            </div>
          </div>
          <div className='button-group'>
              <button className='button-login' onClick={onLogin}>Login</button>
              <Link to='/register'>Registrate</Link>
            </div>
        </form>
      </div>
    </div>
  )
}