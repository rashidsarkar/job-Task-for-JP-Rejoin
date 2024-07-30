import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import App from "../App";
import NotFound from "../Components/NotFound/NotFound";
import Home from "../Page/Home/Home/Home";
import College from "../Page/Colleges/College/College";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/colleges",
        element: <College />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
