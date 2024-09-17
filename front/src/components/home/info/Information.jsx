import './information.css';
const Information = () => {
  return (
    <div className='info_container'>
      <div className='info1'>
        <h2 className='title_info'>Misión</h2>
        <p>
          Brindamos atención médica de calidad y personalizada a través de plataformas
          digitales, con consultas virtuales y presenciales. Nuestro compromiso es ofrecer
          un servicio confiable y seguro, conectando a los pacientes con médicos
          especializados para una atención efectiva. efectiva.
        </p>
      </div>
      <div className='info2'>
        <h2 className='title_info'>Visión</h2>
        <p>
          Queremos ser la plataforma líder en telemedicina, ofreciendo servicios médicos
          digitales y presenciales de excelencia. Buscamos transformar la salud con
          tecnología avanzada y acceso equitativo a cuidados de calidad globalmente.
        </p>
      </div>
    </div>
  );
};

export default Information;
