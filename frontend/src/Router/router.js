import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../common/ErrorPage";
import HomePages from "../Views/HomePages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
