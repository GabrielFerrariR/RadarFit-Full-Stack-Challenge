import { StatusCodes } from 'http-status-codes';

class NotFound extends Error {
  public code = StatusCodes.NOT_FOUND;
  constructor(message: string) {
    super();
    this.name = 'NotFound';
    this.message = message;
  }
}

export default NotFound;
