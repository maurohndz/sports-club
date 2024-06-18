// External
import { Service, Container } from 'typedi';
// Own

@Service()
export class EmployeesController {
  signUp(req, res): void {
    res.send({ key: 'RegisterEmployeeController' });
  }
}

export default Container.get(EmployeesController);
