import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./Auth-routes";
import { EmployeeRoutes } from "./EmployeeRouts";
import { ManagerRoutes } from "./ManagerRoutes";

export function Routes() {
  return (
    <BrowserRouter>
      <ManagerRoutes />
    </BrowserRouter>
  );
}
