import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import PeriodTempComponent from "./index";

jest.mock("../icon-render", () => ({
  __esModule: true,
  default: ({ code, description }: { code: string; description: string }) => (
    <div data-testid="icon-render" data-code={code} data-description={description}></div>
  ),
}));

describe("PeriodTempComponent", () => {
  const mockProps = {
    degree: "25",
    timeDay: "Afternoon",
    code: "113",
  };

  it("deve renderizar corretamente o título e a temperatura", () => {
    render(<PeriodTempComponent {...mockProps} />);

    expect(screen.getByText("Afternoon")).toBeInTheDocument();
    expect(screen.getByText("25ºC")).toBeInTheDocument();
  });

  it("deve renderizar o componente de ícone corretamente", () => {
    render(<PeriodTempComponent {...mockProps} />);

    const icon = screen.getByTestId("icon-render");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-code", "113");
    expect(icon).toHaveAttribute("data-description", "Afternoon icon");
  });

  it("deve renderizar o ícone padrão (500) se code não estiver na equivalence", () => {
    render(<PeriodTempComponent degree="30" timeDay="Night" code="999" />);

    const icon = screen.getByTestId("icon-render");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("data-code", "999");
    expect(icon).toHaveAttribute("data-description", "Night icon");
  });
});
