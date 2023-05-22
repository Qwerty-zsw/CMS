import Homepage from "./Pages/Homepage/Homepage";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import UserList from "./Pages/UserList/UserList";

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
