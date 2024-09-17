import './appointment.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AddAlert } from '../../hooks/alert';
import { getData } from '../../services/getData';
const AppointmentPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, reset, register } = useForm();

  const handleForm = async (data) => {
    navigate('/homePatient');
    try {
      const nuevo = await getData();
      console.log(nuevo);

      console.log(data);
      AddAlert(
        'Haz agendado una cita',
        'Pronto te confirmaremos por correo electronico',
        'success',
      );
    } catch (error) {
      console.log(error);
      AddAlert(
        'Error',
        'Ups algo ha pasado al generar tu cita, intenta nuevamente',
        'error',
      );
    }
    reset();
  };
  return (
    <section className='container_citas'>
      <form className='formulario_citas' onSubmit={handleSubmit(handleForm)}>
        <fieldset className='field_citas'>
          <legend className='legend_citas'>Agendar cita medica</legend>
          <label className='label_citas' for='motivo'>
            Motivo de consulta
          </label>
          <textarea
            name=''
            id="motivo"
            rows={7}
            placeholder='Especifica si sufres alguna enfermedad cronica para saber más al detalle tu situación'
            className='inputs_citas'
            {...register('motivo')}
            required
          ></textarea>

          <label className='label_citas' for="modalidad">Modalidad de la cita</label>
          <select
            name=''
            id='modalidad'
            className='inputs_citas'
            {...register('modalidad')}
            required
          >
            <option value='virtual'>virtual</option>
            <option value='Presencial'>Presencial</option>
          </select>

          <label className='label_citas' for="fecha">Fecha y hora</label>
          <input
            type='datetime-local'
            name='fecha'
            id='fecha'
            {...register('fecha')}
            className='inputs_citas'
            required
          />

          <button className='btn_citas'>Enviar</button>
        </fieldset>
      </form>
    </section>
  );
};

export default AppointmentPage;
