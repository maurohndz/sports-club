import { messages, ERROR_SERVER } from '@Shared/constant/enums/messageHttp';

export class CommonResponse {
  code;
  message;
  data;

  constructor(data, messageKey) {
    const params = messages[messageKey] ?? messages[ERROR_SERVER];

    this.data = data;
    this.code = params.code;
    this.message = params.message;
  }

  build(): { code: number; data: unknown; message: string } {
    return {
      code: this.code,
      data: this.data,
      message: this.message
    };
  }
}
