import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(password);

    try {
      const res = await axios.post("http://localhost:8080/login", {
        username,
        password,
      });

      console.log("Frontend received response:", res.data);

      Swal.fire({
        icon: "success",
        title: "logged in successfully",
        // title: res.data.message,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => {
        setUsername("");
        setPassword("");
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "Login failed",
      });
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #74ebd5, #ACB6E5)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "3rem",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          width: "350px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "2rem", color: "#333" }}>User Login </h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginBottom: "1rem",
              fontSize: "1rem",
            }}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "12px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #ccc",
              marginBottom: "1.5rem",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              width: "100%",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007BFF")}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
