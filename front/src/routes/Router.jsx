import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppointmentPage from '../pages/appointment/appointment';
import HomeAdmin from '../pages/homeAdmin/HomeAdmin';
import HistorialPage from '../pages/historial/HistorialPage';
import FormularioMedico from '../pages/formMedico/FormularioMedico';
import Calendar from '../components/google/Calendar';
import HomeAlternative from '../pages/HomeAlternative/HomeAlternative';
import HomeUser from '../pages/homeUser/HomeUser';
import LoginPage from '../pages/login/LoginPage';
import RegisterPage from '../pages/register/RegisterPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<HomeUser />} />
        <Route path='/citas' element={<AppointmentPage />} />
        <Route path='/homePatient' element={<HomeAlternative />} />
        <Route path='/citasPendientes' element={<HomeAdmin />} />
        <Route path='/historial' element={<HistorialPage />} />
        <Route path='/formConsulta' element={<FormularioMedico />} />
        <Route path='/calendario' element={<Calendar />} />
        <Route path='/' element={<LoginPage />} />
        <Route path='/registro' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
