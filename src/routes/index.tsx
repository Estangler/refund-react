import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./Auth-routes";
import { EmployeeRoutes } from "./EmployeeRouts";

export function Routes() {
  return (
    <BrowserRouter>
      <EmployeeRoutes />
    </BrowserRouter>
  );
}
