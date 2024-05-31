import { Service } from 'typedi';
import { type controller } from '@Shared/interfaces/controller.interfaces';

@Service()
class RegisterEmployeeController implements controller {
  run = async (req, res): Promise<unknown> => {
    return res.send({ hola: 'hola' });
  };
}

export default RegisterEmployeeController;
