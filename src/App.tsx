import React from "react";
import LoginPage from "./components/login";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f2f5" }}>
      <LoginPage />
    </div>
  );
};

export default App;
