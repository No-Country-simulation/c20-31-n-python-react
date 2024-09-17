import './historial.css';

const Historial = () => {
  return (
    <div className='container__tabla'>
      <h1 className='titulo'>Citas confirmadas</h1>
      <table className='tabla'>
        <thead>
          <tr className='fila-encabezado'>
            <th className='celda-encabezado'>Nombre</th>
            <th className='celda-encabezado'>Fecha</th>
            <th className='celda-encabezado'>Diagnóstico</th>
          </tr>
        </thead>
        <tbody>
          <tr className='fila-datos'>
            <td className='celda-dato'>Pepito Pérez</td>
            <td className='celda-dato'>03 julio . 22:00 pm</td>
            <td className='celda-dato'>Enlace</td>
          </tr>
          <tr className='fila-datos'>
            <td className='celda-dato'>Pepito Pérez</td>
            <td className='celda-dato'>03 julio . 22:00 pm</td>
            <td className='celda-dato'>Enlace</td>
          </tr>
          <tr className='fila-datos'>
            <td className='celda-dato'>Pepito Pérez</td>
            <td className='celda-dato'>03 julio . 22:00 pm</td>
            <td className='celda-dato'>Enlace</td>
          </tr>
          <tr className='fila-datos'>
            <td className='celda-dato'>Pepito Pérez</td>
            <td className='celda-dato'>03 julio . 22:00 pm</td>
            <td className='celda-dato'>Enlace</td>
          </tr>
          <tr className='fila-datos'>
            <td className='celda-dato'>Pepito Pérez</td>
            <td className='celda-dato'>03 julio . 22:00 pm</td>
            <td className='celda-dato'>Enlace</td>
          </tr>
          <tr className='fila-datos'>
            <td className='celda-dato'>Pepito Pérez</td>
            <td className='celda-dato'>03 julio . 22:00 pm</td>
            <td className='celda-dato'>Enlace</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Historial;
