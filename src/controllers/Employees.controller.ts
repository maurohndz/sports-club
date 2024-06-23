// External
import { Service } from 'typedi';
// Own
import { EmployeesService } from '../services/Employees.service';
import { CommonController } from '../shared/common/CommonController';

@Service()
export class EmployeesController extends CommonController {
  constructor(readonly employeesService: EmployeesService) {
    super();
  }

  /**
   * Employee register
   */
  signUp = this.mount(async (req, res): Promise<unknown> => {
    return await this.employeesService.signUp(req.body).then((employee) => {
      return { data: employee };
    });
  });
}

export default EmployeesController;
