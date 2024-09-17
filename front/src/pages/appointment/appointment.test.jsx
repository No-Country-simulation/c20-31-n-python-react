import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AppointmentPage from './Appointment';
import { MemoryRouter } from 'react-router-dom';

describe('Prueba al componente de asignación de citas', () => {
  it('verificar que la asignación de citas si tenga los campos requeridos', () => {
    render(
      <MemoryRouter>
        <AppointmentPage />
      </MemoryRouter>,
    );

    const textarea = screen.getByLabelText(/Motivo de consulta/i);
    expect(textarea).toBeVisible();

    const modalidad = screen.getByLabelText(/Modalidad de la cita/i);
    expect(modalidad).toBeVisible();

    const fecha = screen.getByLabelText(/Fecha y hora/i);
    expect(fecha).toBeVisible();
  });
});
