import { render, screen, fireEvent } from "@testing-library/react";
import { LoginForm } from "../src/components/login-form";
import { signIn } from "next-auth/react";

jest.mock("next-auth/react", () => ({
  signIn: jest.fn(),
}));

describe("LoginForm", () => {
  it("renders the login button and calls signIn on click", () => {
    render(<LoginForm />);
    const button = screen.getByRole("button", { name: /auth0 ile giriş yap/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(signIn).toHaveBeenCalledWith("auth0", { prompt: "login" });
  });
});
