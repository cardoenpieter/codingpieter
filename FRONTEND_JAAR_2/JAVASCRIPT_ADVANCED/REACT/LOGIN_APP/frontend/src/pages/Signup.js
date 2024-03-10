import { useState, useEffect, useContext } from "react";

const Signup = () => {
  const [signup, setSignup] = useState("");
  const [input, setInput] = useState({});

  // useEffect(() => {
  //   const base_url = `http://localhost:3001/`;
  //   fetch(base_url, {
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       setSignup(res);
  //     });
  // }, []);

  /*
  name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM(["viewer", "admin"]),
    deze 4 naar de database doorsturen,
    viewer en admin nog te bepalen met usecontext

  */
  const handleClickSignUp = () => {
    const base_url = `http://localhost:3000/users`;
    fetch(base_url, {
      method: "POST",
      body: JSON.stringify(input),
      headers: {
        //extra info aan request meegeven, welke format content meegeven
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSignup(res);
      });
  };

  function handleChange(event) {
    console.log(event.target.value);
    setInput(event.target.value);
  }

  return (
    <div className="container-signup">
      <label>
        Admin: <input type="checkbox" name="checkboxAdmin" />
      </label>
      <label>
        Viewer: <input type="checkbox" name="checkboxNoAdmin" />
      </label>

      <label className="firstname">
        <p>First name</p>
        <input value={input} onChange={handleChange} name="firstname" />
      </label>

      <label className="lastname">
        <p>Last name</p>
        <input value={input} onChange={handleChange} name="lastname" />
      </label>

      <label className="email">
        <p>Email address</p>
        <input value={input} onChange={handleChange} name="emailaddress" />
      </label>

      <label className="password">
        <p>Password</p>
        <input
          value={input}
          onChange={handleChange}
          type="password"
          name="passwordInput"
        />
      </label>
      <div>
        <button onClick={handleClickSignUp} type="submit">
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
