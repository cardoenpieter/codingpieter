import { useState, createContext, useContext } from "react";

const UserContext = createContext("");

const Signup = () => {
  const decideUserRole = useContext(UserContext);
  console.log(decideUserRole);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "", //type: DataTypes.ENUM(["viewer", "admin"]) dit meegeven in de input zodat hij kan vergelijken in de database of het wel degelijk om viewer of admin gaat
  });

  const handleClickSignUp = (e) => {
    e.preventDefault();
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
        console.log("resinput", res);
        setInput(res);
        //clear inputfields
        setInput({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => console.log(err));
  };

  function handleChange(e, key) {
    setInput({ ...input, [key]: e.target.value });
  }
  //object aan het werken: altijd nadenken over datastructuur, dus altijd in objecten blijven werken en geen strings induwen
  //spread: maakt nieuw object en alle key value pairs in object steken, kopie nemen van object, waardes aanpassen en die opnieuw in setinput verwerken
  //key dynamisch maken en deze targetten met de waarde die je in de inputlabel wilt schrijven

  //provider rond de app.js plaatsen
  return (
    <div className="container-signup">
      <UserContext.Provider value={decideUserRole}>
        <label>
          Admin:
          <input
            type="checkbox"
            name="checkboxAdmin"
            checked={input.role === "admin"}
            onChange={(e) => handleChange(e, "role")}
          />
        </label>
        <label>
          Viewer:
          <input
            type="checkbox"
            name="checkboxNoAdmin"
            checked={input.role === "viewer"}
            onChange={(e) => handleChange(e, "role")}
          />
        </label>
      </UserContext.Provider>

      <label className="firstname">
        <p>Firstname and Lastname</p>
        <input
          value={input.name}
          onChange={(e) => handleChange(e, "name")}
          name="firstname"
        />
      </label>

      <label className="email">
        <p>Email address</p>
        <input
          value={input.email}
          onChange={(e) => handleChange(e, "email")}
          name="emailaddress"
        />
      </label>

      <label className="password">
        <p>Password</p>
        <input
          value={input.password}
          onChange={(e) => handleChange(e, "password")}
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
