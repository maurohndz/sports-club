// External
import { Router } from 'express';
// Own
import EmployeesRouter from './Employees.router';

function loadRouter(main: Router): void {
  const router = Router();

  // Employees.
  EmployeesRouter(router);

  main.use('/api', router);
}

export default loadRouter;
