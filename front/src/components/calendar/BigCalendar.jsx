import dayjs from 'dayjs';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './bigCalendar.css';
import { useNavigate } from 'react-router-dom';
const BigCalendar = () => {
  const navigate = useNavigate();

  const onSelect = ({ start, end, day }) => {
    console.log({ start, end, day });
    navigate('/citas');
  };

  const myEvents = ({events}) => {
    <div>
      <span>{events.title}</span>
    </div>;
  };
  const localizer = dayjsLocalizer(dayjs);
  const messages = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'Sin eventos',
    sun: 'Dom',
  };
  return (
    <div style={{ width: '800px', height: '300px' }}>
      <Calendar
        localizer={localizer}
        views={['month', 'week', 'day', 'agenda']}
        messages={messages}
        selectable
        onSelectSlot={onSelect}
        startAccessor='start'
        endAccessor='end'
        formats={{
          monthHeaderFormat: 'MMMM',
        }}
      />
    </div>
  );
};

export default BigCalendar;
