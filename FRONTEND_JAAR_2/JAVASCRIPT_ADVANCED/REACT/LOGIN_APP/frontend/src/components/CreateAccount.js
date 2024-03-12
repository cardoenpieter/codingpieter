import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Not registered yet?</p>
      <button
        className="button-createaccount"
        onClick={() => navigate(`/signup`)}
      >
        <span>Register here</span>
      </button>
    </div>
  );
};

export default CreateAccount;
