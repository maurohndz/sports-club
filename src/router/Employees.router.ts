// External
import { Router } from 'express';
import { Container } from 'typedi';
// Own
import _EmployeesController from '../controllers/Employees.controller';
import {
  EMPLOYEES_SIGN_UP,
  EMPLOYEES_PREFIX
} from '../shared/constant/urls/Employees.url';

const employeesController = Container.get(_EmployeesController);

function employeesRouter(main: Router): void {
  const router = Router();

  // router.get('/', autentication and permisis, validations () => {});

  router.post(EMPLOYEES_SIGN_UP, employeesController.signUp);

  // Set up main route
  main.use(`/${EMPLOYEES_PREFIX}`, router);
}

export default employeesRouter;
