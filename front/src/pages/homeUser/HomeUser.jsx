import Navbar from '../../components/home/navbar/Navbar';
import SliderHome from '../../components/home/slide/SliderHome';
import './homePage.css';
import Information from '../../components/home/info/Information';
import { useNavigate } from 'react-router-dom';
import BigCalendar from '../../components/calendar/BigCalendar';
import { useParams } from "react-router-dom";


const HomeUser = () => {
  const navigate = useNavigate();
  const params = useParams();
  
  return (
    <section className='home_principal'>
      <header>
        <Navbar />
      </header>

      <main className='container_home'>
        <h1 className='title_home'>Bienvenido Sebastián</h1>
        <section className='container_home--childs'>
          <div className='slide_info'>
            <SliderHome />
          </div>
          <div className='info_container--main'>
            <BigCalendar/>
            <Information />
          </div>
        </section>
      </main>
    </section>
  );
};

export default HomeUser;
