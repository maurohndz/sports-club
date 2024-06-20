// Response Success
export const SUCCESS = 'success';
// Response Errors
export const ERROR_SERVER = 'error_server';

export const messages = {
  // Response Success
  [SUCCESS]: { code: 200, message: 'Successful Operation' },
  // Response Errors
  [ERROR_SERVER]: { code: 500, message: 'Internal Server Error' }
};
