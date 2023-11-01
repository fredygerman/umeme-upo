export type responseMessagesType = typeof responseMessages;

export const responseMessages = {
  INVALID_CREDENTIALS: 'Your email or password is incorrect',
  UNKNOWN_ERROR: 'Something went wrong',
  TOKEN_EXPIRED: 'Your session has expired, please log in again',
  404: 'Not found',
  401: 'Unauthorized',
  403: 'Forbidden',
  500: 'Internal server error',
  502: 'Bad gateway',
  503: 'Service unavailable',
  504: 'Gateway timeout',
};
