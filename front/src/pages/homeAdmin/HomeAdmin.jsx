// import { useNavigate } from "react-router-dom";
import Navbar from '../../components/home/navbar/Navbar';
import './homeAdmi.css';
const HomeAdmin = () => {
  // const Navigate = useNavigate();
  return (
    <section className='home_principal'>
      <header>
        <Navbar />
      </header>

      <main className='container_home'>
        <section className='container_alternative'>
          <div className='slide_info '>
            <h1>Lista de citas</h1>
            <ul className='lista'>
              <li className='item_lista'>Pepito perez</li>
              <li className='item_lista'>Pepito perez</li>
            </ul>
          </div>
          <div className='info_container--main'>
            <div className='container__alternative--info'>
              <div className='calendar'>calendarios</div>
              <div className='recomendaciones'>
                <h3>Información</h3>
                <div className='info_cita-admin'>
                  <span>
                    <strong>Paciente:</strong>Pepito perez
                  </span>
                  <span>
                    <strong>Fecha:</strong>3 de julio . 13:00 pm
                  </span>
                  <span>
                    <strong>Motivo:</strong>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Tempora, minima eos
                    ratione dolore voluptas soluta?
                  </span>
                  <span>
                    <strong>Modalidad:</strong>Virtual
                  </span>
                </div>
              </div>
            </div>
            <div className='container_btns'>
              <button>Confirmar</button>
              <button>Editar</button>
              <button>Cancelar</button>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default HomeAdmin;
