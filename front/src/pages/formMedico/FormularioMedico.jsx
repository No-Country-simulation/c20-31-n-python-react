import { useForm } from 'react-hook-form';
import './formularioMedico.css';
import Swal from 'sweetalert2';

const FormularioMedico = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Swal.fire({
      title: 'The Internet?',
      text: 'That thing is still around?',
      icon: 'success',
    });
    console.log('Datos del formulario:', data);
  };

  return (
    <section className='form-bg'>
      <div className='formulario-container'>
        <h1>Formulario de Consulta Médica</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='formulario'>
          <div className='form-group'>
            <label htmlFor='nombrePaciente'>Nombre del Paciente</label>
            <input
              type='text'
              id='nombrePaciente'
              {...register('nombrePaciente', { required: true })}
            />
            {errors.nombrePaciente && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='motivoConsulta'>Motivo de la Consulta</label>
            <textarea
              id='motivoConsulta'
              {...register('motivoConsulta', { required: true })}
            />
            {errors.motivoConsulta && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='correoElectronico'>Correo Electrónico</label>
            <input
              type='email'
              id='correoElectronico'
              {...register('correoElectronico', { required: true })}
            />
            {errors.correoElectronico && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='fecha'>Fecha</label>
            <input
              type='date'
              id='fecha'
              {...register('fecha', { required: true })}
            />
            {errors.fecha && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='edad'>Edad</label>
            <input
              type='number'
              id='edad'
              {...register('edad', { required: true })}
            />
            {errors.edad && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='hora'>Hora</label>
            <input
              type='time'
              id='hora'
              {...register('hora', { required: true })}
            />
            {errors.hora && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='ciudad'>Ciudad</label>
            <input
              type='text'
              id='ciudad'
              {...register('ciudad', { required: true })}
            />
            {errors.ciudad && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='modalidad'>Modalidad</label>
            <select
              id='modalidad'
              {...register('modalidad', { required: true })}
            >
              <option value=''>Seleccionar</option>
              <option value='Virtual'>Virtual</option>
              <option value='Presencial'>Presencial</option>
            </select>
            {errors.modalidad && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>

          <div className='form-group'>
            <label htmlFor='diagnostico'>Diagnóstico</label>
            <textarea
              id='diagnostico'
              {...register('diagnostico', { required: true })}
            />
            {errors.diagnostico && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <div className='form-group'>
            <label htmlFor='recomendaciones'>Recomendaciones</label>
            <textarea
              id='recomendaciones'
              {...register('recomendaciones', { required: true })}
            />
            {errors.recomendaciones && (
              <span className='error'>Este campo es obligatorio</span>
            )}
          </div>
          <button type='submit' className='btn-enviar'>
            Enviar al Paciente
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormularioMedico;
