import { Outlet, createBrowserRouter } from "react-router-dom";
import People from "../pages/People";
import { Home } from "../pages/Home";
import Movies from "../pages/Movies";
import CustomHeader from "../components/CustomHeader";
import Character from "../pages/Character";
import { RouteLayout } from "./style";
import Movie from "../pages/Movie";
import Planets from "../pages/Planets";
import Startships from "../pages/Starships";

const AppLayout = () => {
  return (
    <RouteLayout>
      <CustomHeader />
      <Outlet />
    </RouteLayout>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/characters", element: <People /> },
      { path: "/characters/:id", element: <Character /> },
      { path: "/movies", element: <Movies /> },
      { path: "/movies/:id", element: <Movie /> },
      {
        path: "/planets",
        element: <Planets />,
      },
      {
        path: "/starships",
        element: <Startships />,
      },
    ],
  },
]);

export default router;
