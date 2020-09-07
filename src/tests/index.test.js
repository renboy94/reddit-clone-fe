import { ThemeProvider, createGlobalStyle } from "styled-components";
import { render, screen } from "@testing-library/react";
import Header from "../../pages/components/Header";
import Card from "../../pages/components/Card";
import LightTheme from "../../themes/light";

describe("App", () => {
  it("renders without crashing", () => {
    // render(<Card />);
    // expect(screen.getByTestId("card-title")).toHaveTextContent(
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    // );
    render(
      <ThemeProvider
        theme={{
          LightTheme,
          setTheme: () => {},
        }}
      >
        <Header />
      </ThemeProvider>
    );
    expect(screen.getByTestId("header-title")).toHaveTextContent("Reddits");
  });
});
