import { useRoutes } from "react-router-dom";
import { AdminLables } from "../components/constants/AdminLables";
import { WebRoutesObject } from "../components/constants/WebRoutesObject";

const AdminRoutes = () => {
  const routesObj = AdminLables;
  const routes = useRoutes([...routesObj]);
  return routes;
};
const WebsiteRoutes = () => {
  const routesObj = WebRoutesObject;
  const routes = useRoutes([...routesObj]);
  return routes;
};
export { AdminRoutes, WebsiteRoutes };
