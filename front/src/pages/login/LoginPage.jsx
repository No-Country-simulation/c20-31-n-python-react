import { useForm } from 'react-hook-form';
import Button from '../../components/shared/button/Button';
import './Login.css';
import { AddAlert } from '../../hooks/alert';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, reset, register } = useForm();

  const handleForm = async (data) => {
    AddAlert('Bienvenido', 'Haz accedido con exito', 'success');
    navigate('/home');
    try {
      const response = await fetch('https://flask-rest-hello-lyyv.onrender.com/login', {
        method: 'Post',
        headers: { 'content-type': 'application/json' },
        body: data,
      });
      reset();
      return response;
    } catch (error) {
      console.log(error);
      AddAlert('Error', 'Ingresa nuevamente', 'error');
    }
  };
  return (
    <form className='container' onSubmit={handleSubmit(handleForm)}>
      <div className='login-section'>
        <div className='login-box'>
          <h2>Login</h2>
          <input type='email' placeholder='Correo electrónico' {...register('email')} />
          <input type='password' placeholder='Contraseña' {...register('password')} />
          <Button texto='Ingresar' />
        </div>
      </div>
      <div className='register-section'>
        <button texto='Regístrate' type='button' onClick={() => navigate('/registro')}>Regitro</button>
      </div>
    </form>
  );
};

export default LoginPage;
