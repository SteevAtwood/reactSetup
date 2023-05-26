import React from "react";
import { render, screen } from "@testing-library/react";
import { toBeInTheDocument, toHaveTextContent } from "@testing-library/jest-dom";
import UserPage from "../pages/UserPage/UserPage"

test("renders submit button", () => {
  render(<UserPage />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});

test("button has correct label", () => {
  render(<UserPage />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toHaveTextContent("Submit");
});

test("renders password input field", () => {
    render(<UserPage />);
    const passwordInput = screen.getByTestId("password-input");
    expect(passwordInput).toBeInTheDocument();
  });