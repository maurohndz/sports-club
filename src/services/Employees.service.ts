// External
import { Service } from 'typedi';

@Service()
export class EmployeesService {
  /**
   * Employee register
   * @param payload
   * @returns
   */
  async signUp(payload): Promise<unknown> {
    return payload;
  }
}
