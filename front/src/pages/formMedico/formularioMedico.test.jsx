import { expect, it } from 'vitest';
import FormularioMedico from './FormularioMedico';
import { render, screen } from '@testing-library/react';

describe('pruebas al formulario realizar historial de consulta medica', () => {
  it('Debe de haber un boton para enviar', () => {
    render(<FormularioMedico />);
    const button = screen.getByRole('button', { name: /Enviar al Paciente/i });
    expect(button).toBeVisible();
  });

//   it('verificar si los inputs se estan renderizando', () => {
//     render(<FormularioMedico />);
//     const 
//   });
});
