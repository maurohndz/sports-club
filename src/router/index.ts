import { Router } from 'express';
import EmployeesRouter from '@Employees/Employees/router/index.employees';

function loadRouter(main: Router): void {
  const router = Router();

  // Employees.
  EmployeesRouter(router);

  main.use('/api', router);
}

export default loadRouter;
