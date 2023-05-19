import Homepage from "./Pages/Homepage/Homepage";
import UserList from "./Pages/Users/UserList";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
];

export default routes;
