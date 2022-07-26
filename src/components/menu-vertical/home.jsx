import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import { PATH } from "../../utils/const";

const Home = () => {
  return (
    <Link to={PATH.HOME} className="home">
      <div className="border-icon">
        <TiHome className="icon" />
      </div>
    </Link>
  );
};

export default Home;
