import { useNavigate } from "react-router-dom";
import { getUser, removeToken, removeUser } from "../utils/localstorage";
import { navigateToUrl } from "single-spa";
export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    removeToken();
    removeUser();
    navigate("/");
  };
  const Pruebaya = (e) => {
    removeToken();
    removeUser();
    navigateToUrl("/about");
    window.location.replace("/about")
  };

  return (
    <div className="contenedor">
      <h1>Bienvenido {getUser()} estas logeado</h1>
      <button className="buttonLogout" onClick={handleLogout}>
        Logout
      </button>
      <button className="buttonLogout"onClick={Pruebaya} >
        prueba
      </button>
    </div>
  );
};

export default Home;
