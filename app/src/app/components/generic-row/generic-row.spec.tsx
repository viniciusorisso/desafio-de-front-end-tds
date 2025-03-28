import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import GenericRowComponent from "./index";

describe("GenericRowComponent", () => {
  const props = {
    first: { title: "First", value: "Value First" },
    second: { title: "Second", value: "Value Second" },
    third: { title: "Third", value: "Value Third" },
    forth: { title: "Forth", value: "Value Forth" },
  };

  it("renderiza corretamente os títulos e valores", () => {
    render(<GenericRowComponent {...props} />);

    expect(screen.getByText("First")).toBeInTheDocument();
    expect(screen.getByText("Second")).toBeInTheDocument();
    expect(screen.getByText("Third")).toBeInTheDocument();
    expect(screen.getByText("Forth")).toBeInTheDocument();

    expect(screen.getByText("Value First")).toBeInTheDocument();
    expect(screen.getByText("Value Second")).toBeInTheDocument();
    expect(screen.getByText("Value Third")).toBeInTheDocument();
    expect(screen.getByText("Value Forth")).toBeInTheDocument();
  });

  it("mantém a estrutura correta de grupos e divisores", () => {
    const { container } = render(<GenericRowComponent {...props} />);

    const groups = container.getElementsByClassName("group");
    expect(groups.length).toBe(2);

    const dividers = container.getElementsByClassName("divider");
    expect(dividers.length).toBe(3);
  });
});
