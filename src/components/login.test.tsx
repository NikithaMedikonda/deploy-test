import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './login';

describe('LoginPage Component', () => {
  test('renders email, password fields, and login button', () => {
    render(<LoginPage />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('shows error when form is submitted with empty fields', () => {
    render(<LoginPage />);

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText(/please fill in all fields/i)).toBeInTheDocument();
  });

  test('shows error message on incorrect login', () => {
    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'wrong@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'wrongpassword' },
    });

    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
  });
});
