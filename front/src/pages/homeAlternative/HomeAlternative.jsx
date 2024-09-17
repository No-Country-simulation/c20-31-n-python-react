import './HomeAlternative.css';
import Navbar from '../../components/home/navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import BigCalendar from '../../components/calendar/BigCalendar';
const HomeAlternative = () => {
  const Navigate = useNavigate();
  return (
    <section className='home_principal'>
      <header>
        <Navbar />
      </header>

      <main className='container_home'>
        <section className='container_alternative'>
          <div className='slide_info '>
            <h1>Información de la cita</h1>
            <div>
              <h3>Nombre del medico</h3>
              <span>pepito perez</span>
            </div>

            <div>
              <h3>Fecha de cita</h3>
              <span>3 de julio - 22:00 pm</span>
            </div>

            <div>
              <h3>Modalidad de cita</h3>
              <span>virtual</span>
            </div>

            <div>
              <h3>Motivo de consulta</h3>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora consequatur odio quas! Veniam pariatur, corrupti
                eum rem molestiae ea reiciendis! Ipsam laboriosam ipsum
                placeat eos pariatur facilis, debitis suscipit vero!
              </span>
            </div>
          </div>
          <div className='info_container--main'>
            <div className='container__alternative--info'>
            <BigCalendar/>
              <div className='recomendaciones'>
                <h3>Recomendaciones para tu cita medica</h3>
                <div className='recomendacion'>
                  <span>
                    <strong>Prepara la Información Médica:</strong> Ten a
                    mano tu historial médico, una lista de tus medicamentos
                    actuales, y cualquier información relevante sobre tus
                    síntomas o preocupaciones.
                  </span>
                </div>
                <br />
                <div className='recomendacion'>
                  <span>
                    <strong>Verifica la Tecnología:</strong> Asegúrate de
                    tener una conexión a Internet estable. Revisa que tu
                    cámara, micrófono y altavoces funcionen correctamente.
                    Es útil probar la plataforma de la cita (como Zoom,
                    Microsoft Teams, o una plataforma específica para citas
                    médicas) antes de la consulta.
                  </span>
                </div>
                <br />
                <div className='recomendacion'>
                  <span>
                    <strong>Elige un Lugar Tranquilo:</strong> Busca un
                    lugar en tu casa donde puedas hablar en privado sin
                    distracciones. Informa a los miembros de tu familia o
                    compañeros de casa para que no interrumpan.
                  </span>
                </div>
              </div>
            </div>
            <button
              className='btn_ircita'
              onClick={() => Navigate('/citas')}
            >
              Ir a la cita
            </button>
          </div>
        </section>
      </main>
    </section>
  );
};

export default HomeAlternative;
