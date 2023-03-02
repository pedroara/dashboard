import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContainer from "../components/App/AppContainer";
import DashboardContainer from "../components/Dashboard/DashboardContainer";
import NotFound from "../components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardContainer />,
    errorElement: <NotFound />,
  },
]);

export default function Routes() {
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
}
