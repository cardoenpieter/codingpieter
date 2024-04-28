import CreateAccount from "../components/CreateAccount";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const logInToHomepage = (e) => {
    e.preventDefault();
    const base_url = `http://localhost:3000/users/login`;
    fetch(base_url, {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("testres", res);
        setUserInput(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  function handleChange(e, key) {
    setUserInput({ ...userInput, [key]: e.target.value });
  }

  const checkAllUsersinDatabase = (e) => {
    e.preventDefault();
    const base_url = `http://localhost:3000/users`;
    fetch(base_url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("allUsersInDatabase", res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-login">
      <label className="username-login">
        <p>Username</p>
        <input
          value={userInput.email}
          onChange={(e) => handleChange(e, "email")}
          name="usernameInput"
          placeholder="Use email address"
        />
      </label>

      <label className="password-login">
        <p>Password</p>
        <input
          value={userInput.password}
          onChange={(e) => handleChange(e, "password")}
          name="passwordInput"
          type="password"
        />
      </label>
      <div className="button-login">
        <button onClick={logInToHomepage} type="submit">
          Log In
        </button>
      </div>
      <CreateAccount />
      <button onClick={checkAllUsersinDatabase} type="submit">
        All Users
      </button>
    </div>
  );
};

export default Login;
