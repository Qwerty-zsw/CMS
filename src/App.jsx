import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

const App = () => {
  const router = useRoutes(routes);

  return (
    <div>
      <Navbar />
      <div className="d-flex mt-2">
        <Sidebar />
        {router}
      </div>
    </div>
  );
};

export default App;
