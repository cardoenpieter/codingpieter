import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="button-login-home" onClick={() => navigate(`/login`)}>
        <span>Login</span>
      </button>
    </>
  );
};

export default Home;
