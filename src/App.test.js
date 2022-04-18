import { fireEvent, render, screen } from '@testing-library/react';
import App from './App'; 
import Signup from './Pages/Signup/Signup'

test('First name', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/First name/i);
  expect(linkElement).toBeInTheDocument();
});
test('Last name', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/last name/i);
  expect(linkElement).toBeInTheDocument();
});
test('email', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/email/i);
  expect(linkElement).toBeInTheDocument();
});

test('Sign up', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/sign up/i);
  expect(linkElement).toBeInTheDocument();
});
test('Login', () => {
  render(<Signup />);
  const linkElement = screen.getByText(/Back/i);
  expect(linkElement).toBeInTheDocument();
});

test('email validate', () => {
  render(<Signup />);
  const linkElement = screen.getByTestId("email-check");
  expect(linkElement).toHaveAttribute("type","email");
});

test('email firstname', () => {
  render(<Signup />);
  const linkElement = screen.getByTestId("fname-check");
  expect(linkElement).toHaveAttribute("type","text");
});

test('button',() => {
  render(<Signup />);
  const btn = screen.getByTestId("btn-check");
  fireEvent.click(btn);
  expect(screen.getByTestId("btn-check")).toHaveTextContent("Sign Up");
});