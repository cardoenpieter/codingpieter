import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "", //type: DataTypes.ENUM(["viewer", "admin"]) dit meegeven in de input zodat hij kan vergelijken in de database of het wel degelijk om viewer of admin gaat
  });

  const handleClickSignUp = (e) => {
    e.preventDefault();
    //warning wanneer er geen role is aangeklikt
    if (!input.role) {
      alert("Please select a role (Viewer or Admin)");
      return;
    }
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
        console.log("setinput", res);
        setInput(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  function handleChange(e, key) {
    console.log(key);
    setInput({ ...input, [key]: e.target.value });
  }

  //object aan het werken: altijd nadenken over datastructuur, dus altijd in objecten blijven werken en geen strings induwen
  //spread: maakt nieuw object en alle key value pairs in object steken, kopie nemen van object, waardes aanpassen en die opnieuw in setinput verwerken
  //key dynamisch maken en deze targetten met de waarde die je in de inputlabel wilt schrijven

  return (
    <div className="container-signup">
      <div>
        <label>
          Viewer:
          <input
            type="radio"
            name="role"
            value="viewer"
            onChange={(e) => handleChange(e, "role")}
          />
        </label>
        <label>
          Admin:
          <input
            type="radio"
            name="role"
            value="admin"
            onChange={(e) => handleChange(e, "role")}
          />
        </label>
      </div>

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
