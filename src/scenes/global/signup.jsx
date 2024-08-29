import React, { useState } from "react";
import { TextField, Button, Stack, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [formValid, setFormValid] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = () => {
    setSuccess(null);
    setFormValid(null);

    if (!usernameInput || !emailInput || !passwordInput) {
      setFormValid("All fields are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = {
      username: usernameInput,
      email: emailInput,
      password: passwordInput,
    };

    // Lưu thông tin người dùng vào localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    setSuccess("Registration Successful");

    // Chuyển hướng đến trang UserDashboard
    navigate("/Register");
  };

  

  return (
    <div>
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Username"
          fullWidth
          variant="standard"
          sx={{ width: "100%" }}
          size="small"
          value={usernameInput}
          onChange={(event) => setUsernameInput(event.target.value)}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Email Address"
          fullWidth
          variant="standard"
          sx={{ width: "100%" }}
          size="small"
          value={emailInput}
          onChange={(event) => setEmailInput(event.target.value)}
        />
      </div>
      <div style={{ marginTop: "5px" }}>
        <TextField
          label="Password"
          type="password"
          fullWidth
          variant="standard"
          sx={{ width: "100%" }}
          size="small"
          value={passwordInput}
          onChange={(event) => setPasswordInput(event.target.value)}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button variant="contained" fullWidth onClick={handleSubmit} style={{ backgroundColor:"#4D44B5"}}>
          SIGN UP
        </Button>
      </div>
      {formValid && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="error">{formValid}</Alert>
        </Stack>
      )}
      {success && (
        <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
          <Alert severity="success">{success}</Alert>
        </Stack>
      )}
    </div>
  );
};

export default Register;
