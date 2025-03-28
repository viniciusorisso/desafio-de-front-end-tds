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
    const { container } = render(<HeaderComponent title="Weather" description="Select a city" />);

    expect(container.getElementsByTagName('svg').length).toBe(1);
  });

  it('deve renderizar um ícone quando um código for passado', () => {
    const { container } = render(<HeaderComponent title="Weather" description="Select a city" icon="200" />);

    expect(container.getElementsByTagName('svg').length).toBe(1);
  });
});
