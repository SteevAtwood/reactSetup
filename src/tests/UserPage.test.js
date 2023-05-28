import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import {
  toBeInTheDocument,
  toHaveTextContent,
} from "@testing-library/jest-dom";
import UserPage from "../pages/UserPage/UserPage";

test("submit button shown", () => {
  render(<UserPage />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});

test("button has right label", () => {
  render(<UserPage />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toHaveTextContent("Submit");
});

test("password input field exists", () => {
  render(<UserPage />);
  const passwordInput = screen.getByTestId("password-input");
  expect(passwordInput).toBeInTheDocument();
});

test("result shown on page", async () => {
  const searchData = {
    text: "text1",
    link: "link1",
  };
  render(<UserPage />);

  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce(searchData),
  });

  const passwordInput = screen.getByTestId("password-input");
  const submitButton = screen.getByRole("button", { name: /submit/i });
  act(() => {
    fireEvent.change(passwordInput, { target: { value: "password1" } });
    fireEvent.click(submitButton);
  });
  await act(async () => {
    await Promise.resolve(); 
  });

  const searchResultText = screen.getByText(searchData.text);
  const searchResultLink = screen.getByText(searchData.link);
  
  expect(searchResultText).toBeInTheDocument();
  expect(searchResultLink).toBeInTheDocument();
});


