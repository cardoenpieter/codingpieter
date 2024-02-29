//import CreateAccount from "../components/CreateAccount.js";

const Signup = () => {
  return (
    <>
      <label>
        Admin: <input type="checkbox" name="checkboxAdmin" />
      </label>
      <label>
        No-Admin: <input type="checkbox" name="checkboxNoAdmin" />
      </label>

      <label>
        First name
        <input name="firstname" placeholder="Firstname" />
      </label>

      <label>
        Last name
        <input name="lastname" placeholder="Lastname" />
      </label>

      <label>
        Email address
        <input name="emailaddress" placeholder="Email address" />
      </label>

      <label>
        Password
        <input name="passwordInput" placeholder="Password" />
      </label>

      <button type="submit">REGISTER</button>
    </>
  );
};

export default Signup;
