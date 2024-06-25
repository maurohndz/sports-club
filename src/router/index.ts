// External
import { Router } from 'express';
// Own
import EmployeesRouter from './Employees.router';

function loadRouter(main: Router): void {
  const router = Router();

  // Employees.
  EmployeesRouter(router);

  main.use('/api', router);

  // Check the status of the API
  main.get('/status-api', (req, res) => {
    res.status(200).send({ msg: 'API run.' });
  })
}

export default loadRouter;
