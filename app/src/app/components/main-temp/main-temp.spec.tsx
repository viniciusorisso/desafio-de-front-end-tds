import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import MainTempComponent from ".";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe("MainTempComponent", () => {
  const props = {
    degree: "25",
    format: "°C",
    lastDegree: "28",
    nextDegree: "22",
  };

  it("renderiza corretamente a temperatura atual e o formato", () => {
    render(<MainTempComponent {...props} />);

    expect(screen.getByText("25")).toBeInTheDocument();
    expect(screen.getByText("°C")).toBeInTheDocument();
  });

  it("exibe corretamente as temperaturas máxima e mínima", () => {
    render(<MainTempComponent {...props} />);

    expect(screen.getByText("28 º")).toBeInTheDocument();
    expect(screen.getByText("22 º")).toBeInTheDocument();
  });

  it("exibe os ícones de seta corretamente", () => {
    const { container } = render(<MainTempComponent {...props} />);
    
    expect(container.getElementsByClassName("icons-size").length).toBe(2)
    expect(container.getElementsByClassName("icons-size")[0]).not.toBeNull();
    expect(container.getElementsByClassName("icons-size")[1]).not.toBeNull();
  });
});
