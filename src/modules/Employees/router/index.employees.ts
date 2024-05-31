/* eslint-disable @typescript-eslint/no-misused-promises */
// External
import { Router } from 'express';
// Own
import mountC from '@Shared/buildProject/mountController';
import { RegisterEmployee } from './routes';

function employeesRouter(main: Router): void {
  const router = Router();

  // router.get('/', autentication and permisis () => {});
  router.post('/', mountC(RegisterEmployee));

  // Set up main route
  main.use('/employees', router);
}

export default employeesRouter;
