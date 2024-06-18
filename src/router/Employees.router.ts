// External
import { Router } from 'express';
// Own
import EmployeesController from '@Controllers/Employees.controller';
import {
  EMPLOYEES_SIGN_UP,
  EMPLOYEES_PREFIX
} from '@Shared/constant/urls/Employees.url';

function employeesRouter(main: Router): void {
  const router = Router();

  // router.get('/', autentication and permisis, validations () => {});

  router.post(EMPLOYEES_SIGN_UP, EmployeesController.signUp);

  // Set up main route
  main.use(`/${EMPLOYEES_PREFIX}`, router);
}

export default employeesRouter;
