import { Container } from 'typedi';
import RegisterEmployeeController from '../controller/RegisterEmployee.controller';

export const RegisterEmployee = Container.get(RegisterEmployeeController);
