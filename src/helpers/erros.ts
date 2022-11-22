export abstract class GenericError extends Error {
  constructor(public code: number, public msg: string) {
    super(msg);
    this.code = code;
  }
}

export class InvalidArgumentsError extends GenericError {
  constructor(public msg: string) {
    super(400, msg);
  }
}

export class IdNotFoundError extends GenericError {
  constructor(public msg: string) {
    super(400, msg);
  }
}
