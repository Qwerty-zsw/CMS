import Homepage from "./Pages/Homepage/Homepage";
import UserList from "./Pages/Users/UserList";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import Transactios from "./Pages/Transactios/Transactios";
import Reports from "./Pages/Reports/Reports";

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/transactios", element: <Transactios /> },
  { path: "/reports", element: <Reports /> },
];

export default routes;
