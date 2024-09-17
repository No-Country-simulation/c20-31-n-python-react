import { useForm } from 'react-hook-form';
import Button from '../../components/shared/button/Button';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { AddAlert } from '../../hooks/alert';
import { PostData } from '../../services/postData';

function RegisterPage() {
  const navigate = useNavigate();
  const { handleSubmit, reset, register } = useForm();

  const handleRegister = async (data) => {
    try {
      AddAlert('Tu registro fue exitoso', 'Ya puedes iniciar sesión', 'success');
       const registro = await PostData('patient', `${data}`);
       console.log(data);
       
      navigate('/');
      return registro
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='registro-container'>
      <h2>Registro</h2>
      <p className='registro-descripcion'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <form className='registro-form' onSubmit={handleSubmit(handleRegister)}>
        <input type='text' placeholder='Nombre completo' {...register('name')} />
        <input type='email' placeholder='Correo Electrónico' {...register('email')} />
        <input type='password' placeholder='Password' {...register('password')} />
        <input type='text' placeholder='DNI' {...register('dni')} />
        <input type='number' placeholder='Número de Teléfono' {...register('number')} />
        <input type='number' placeholder='Edad' {...register('age')} />
        <select {...register('gender')}>
          <option value='' disabled selected>
            Género
          </option>
          <option value='masculino'>Masculino</option>
          <option value='femenino'>Femenino</option>
          <option value='otro'>Otro</option>
        </select>
        <select {...register('country')}>
          <option value='' disabled selected>
            País
          </option>
          <option value='argentina'>Argentina</option>
          <option value='colombia'>Colombia</option>
          <option value='venezuela'>Venezuela</option>
          <option value='peru'>Perú</option>
        </select>
        <input type='text' placeholder='Ciudad' {...register('city')} />
        <Button texto='Registrarse' />
      </form>
    </div>
  );
}

export default RegisterPage;
