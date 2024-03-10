import CreateAccount from "../components/CreateAccount";

const Login = () => {
  return (
    <div className="container-login">
      <label className="username-login">
        <p>Username</p>
        <input name="usernameInput" />
      </label>

      <label className="password-login">
        <p>Password</p>
        <input name="passwordInput" />
      </label>
      <div className="button-login">
        <button type="submit">Log In</button>
      </div>

      <CreateAccount />
    </div>
  );
};

export default Login;
