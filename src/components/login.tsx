import React, { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (email === "admin@example.com" && password === "password123") {
      alert("Login Successful!");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        width: "300px", 
        padding: "30px", 
        backgroundColor: "#fff", 
        borderRadius: "10px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
      {error && <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ddd" }}
        />
      </div>
      <button 
        type="submit" 
        style={{
          width: "100%", 
          padding: "10px", 
          borderRadius: "5px", 
          backgroundColor: "#4caf50", 
          color: "#fff", 
          border: "none", 
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </form>
  );
};

export default LoginPage;
