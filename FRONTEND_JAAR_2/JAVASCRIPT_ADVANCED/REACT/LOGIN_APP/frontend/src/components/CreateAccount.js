import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>No account?</p>
      <button className="button-register" onClick={() => navigate(`/signup`)}>
        <span>Register here</span>
      </button>
    </div>
  );
};

export default CreateAccount;
