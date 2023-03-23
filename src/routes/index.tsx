import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContainer from "../components/AppLayout/AppLayoutContainer";
import AssetContainer from "../components/Assets/AssetContainer";
import AssetsContainer from "../components/Assets/AssetsContainer";
import DashboardContainer from "../components/Dashboard/DashboardContainer";
import NotFound from "../components/NotFound/NotFound";
import UnitContainer from "../components/Units/UnitContainer";
import UserContainer from "../components/Users/UserContainer";
import WorkOrderContainer from "../components/WorkOrders/WorkOrderContainer";
import WorkOrdersContainer from "../components/WorkOrders/WorkOrdersContainer";

const withLayoutWrapper = (Component: any) => (
  <AppContainer>
    <Component />
  </AppContainer>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: withLayoutWrapper(DashboardContainer),
    errorElement: <NotFound />,
  },
  {
    path: "/users/:userId",
    element: withLayoutWrapper(UserContainer),
  },
  {
    path: "/units/:unitId",
    element: withLayoutWrapper(UnitContainer),
  },
  {
    path: "/workOrders",
    element: withLayoutWrapper(WorkOrdersContainer),
  },
  {
    path: "/workOrders/:workOrderId",
    element: withLayoutWrapper(WorkOrderContainer),
  },
  {
    path: "/assets",
    element: withLayoutWrapper(AssetsContainer),
  },
  {
    path: "/assets/:assetId",
    element: withLayoutWrapper(AssetContainer),
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
