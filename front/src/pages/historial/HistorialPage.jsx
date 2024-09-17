import Historial from '../../components/historial/Historial';
import Navbar from '../../components/home/navbar/Navbar';

const HistorialPage = () => {
  return (
    <section className='home_principal'>
      <header>
        <Navbar />
      </header>

      <div>
        <Historial />
      </div>
    </section>
  );
};

export default HistorialPage;
