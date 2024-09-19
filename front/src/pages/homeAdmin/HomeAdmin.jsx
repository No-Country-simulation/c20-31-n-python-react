// import { useNavigate } from "react-router-dom";
import Navbar from '../../components/home/navbar/Navbar';
import './homeAdmi.css';
import { getData } from '../../services/getData';
import { useParams } from 'react-router-dom';
import { useState } from 'react';



const HomeAdmin = () => {
  // const Navigate = useNavigate();
  const [citas, setCitas]=useState([]);
  const [datosCita, setDatosCita]=useState("");
  const [datosPatient, setDatosPatient]=useState("");
  
  const params=  useParams();
  
  const obtenerCitas= async ()=>{
    try{
     
      setCitas(await getData("appointments", params.token))
      console.log(citas)
      return;
    } catch (error) {
      console.log(error);
        AddAlert('Error', 'Ingresa nuevamente', 'error');
    }
  }

  const fechaForma=(fecha)=>{
    let fechaF = new Date(fecha);
  const diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const diaSemana = diasSemana[fechaF.getDay()];
  const dia = fechaF.getDate();
  const mes = meses[fechaF.getMonth()];
  const anio = fechaF.getFullYear();

  const fechaFormateada = `${diaSemana} ${dia} de ${mes} ${anio}`;
  return fechaFormateada;
  }

  const getDetalleCita= async (id_patient,id_cita) =>{

    const patient= await getData("patient/"+id_patient,params.token);
    setDatosPatient(patient)

    const cita= await getData("appointment/"+id_cita,params.token);
    setDatosCita(cita)
    
    return 
  }

  console.log("cita:  "+datosCita)
  console.log("paciente:  "+datosPatient)
  //llamamos nuestra funcion
  obtenerCitas();
  return (
    <section className='home_principal'>
      <header>
        <Navbar />
      </header>

      <main className='container_home'>
        <section className='container_alternative'>
          <div className='slide_info '>
            <h1>Lista de citas</h1>
            <ul className="lista">
              
                {
              
                citas.map((element, index) => {

                                        return (
                                          
                                            <li 
                                            className="item_lista"
                                            key={element.id}
                                            onClick={() => getDetalleCita(element.id_patient,element.id)}
                                          >{fechaForma(element.date)} / {element.mode}</li>
                                            
                                        );
                   }) //fin del map
              }
              </ul>
          </div>
          <div className='info_container--main'>
            <div className='container__alternative--info'>
              <div className='calendar'>calendarios</div>
              <div className='recomendaciones'>
                <h3>Información</h3>
                <div className='info_cita-admin'>
                  <span>
                    <strong>Paciente:</strong>{datosPatient.name}
                  </span>
                  <span>
                    <strong>Fecha:</strong>{fechaForma(datosCita.date)}
                  </span>
                  <span>
                    <strong>Motivo:</strong>{datosCita.reason}
                  </span>
                  <span>
                    <strong>Modalidad:</strong>{datosCita.mode}
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
