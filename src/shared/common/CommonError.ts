import { messages } from '@Shared/constant/enums/messageHttp';
import { CommonResponse } from './CommonResponse';

export class CommonError extends CommonResponse {
  constructor(keyError: string) {
    super(null, keyError);

    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (messages[keyError]) {
      console.error(keyError);
    }
  }
}
