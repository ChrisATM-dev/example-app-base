import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
   const { login } = useContext(AuthContext);

  const onLogin = () => {
    login();
  }

  return (
    <>
        <div>LoginPage</div>
        <hr />
        <button onClick={onLogin}>Login</button>
    </>
  )
}
