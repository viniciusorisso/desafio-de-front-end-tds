import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HeaderComponent from '.';

describe('HeaderComponent', () => {
  it('deve renderizar o título e a descrição corretamente', () => {
    const props = { title: 'Weather', description: 'Select a city' };

    render(<HeaderComponent {...props} />);

    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.getByText('Select a city')).toBeInTheDocument();
  });

  it('deve renderizar o ícone padrão se nenhum for passado', () => {
    render(<HeaderComponent title="Weather" description="Select a city" />);

    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
  });

  it('deve renderizar o ícone correto quando um código for passado', () => {
    render(<HeaderComponent title="Weather" description="Select a city" icon="200" />);

    const icon = screen.getByRole('img');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('alt', 'Select a city');
  });
});
