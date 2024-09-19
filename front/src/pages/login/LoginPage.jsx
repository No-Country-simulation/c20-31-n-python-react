import { useForm } from 'react-hook-form';
import React, { useState, useContext} from "react";
import Button from '../../components/shared/button/Button';
import './Login.css';
import { AddAlert } from '../../hooks/alert';
import { useNavigate } from 'react-router-dom'; 
import { PostData } from '../../services/postData';




const loginUser = {
  email: "",
  password: "",
};



const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, reset, register } = useForm();


//mi codigo
const [login, setLogin] = useState(loginUser)

//actualizamos 
const hanndleEvent = (event) => {

    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  const handleForm = async () => {

    if (login.email == "") {
      AddAlert("Debe introdducir su Email")
      return
    }
    if (login.password == "") {
      AddAlert("Debe introducir su Contraseña")
      return
    }

    try {
      //const response = await fetch('https://flask-rest-hello-lyyv.onrender.com/login', 

     
      reset();
      
      const  data= await PostData("login", login)
      console.log(data)
      
      if (!data.token) 
        AddAlert("Credenciales invalidas!")
      
      if (data.token) {
        if(data.type=="patient"){
          navigate(`/home/${data.token}`);
          AddAlert("Bienvenido!")
          return;
        }else
          if(data.type=="doctor"){
            navigate(`/citasPendientes/${data.token}`);
            AddAlert("Bienvenido!")
            return;
        }
        
        
      }
     
					
    } catch (error) {
      console.log(error);
      AddAlert('Error', 'Ingresa nuevamente', 'error');
    }
    

  };

  return (
    <form className='container'>
      <div className='login-section'>
        <div className='login-box'>
          <h2>Login</h2>
          <input type='email' name="email" id="email" placeholder='Correo electrónico' onChange={hanndleEvent} />
          <input type='password' name="password" id="password" placeholder='Contraseña' onChange={hanndleEvent} />
          <button type="button" onClick={handleForm} >Ingresar</button>
         
        </div>
      </div>
      <div className='register-section'>
        <button texto='Regístrate' type='button' onClick={() => navigate('/registro')}>Regitro</button>
      </div>
    </form>
  );
};

export default LoginPage;
