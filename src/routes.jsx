import Homepage from "./Pages/Homepage/Homepage";
import NewUser from "./Pages/NewUser/NewUser";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import UserList from "./Pages/UserList/UserList";

const routes = [
  { path: "/", element: <Homepage /> },
  { path: "/users", element: <UserList /> },
  { path: "/newUser", element: <NewUser /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
];

export default routes;
