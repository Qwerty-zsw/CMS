import Navbar from "./Components/Navbar/Navbar";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

const App = () => {
  const router = useRoutes(routes)

  return (
    <>
    <Navbar />
    {router}
    </>
  )
}

export default App