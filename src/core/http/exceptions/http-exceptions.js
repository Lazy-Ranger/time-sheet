const { HttpBaseException } = require("./http-base-exceptions.class");

class ServiceUnavailableExceptions extends HttpBaseException {
  constructor(objectOrError, description) {
    super(503, objectOrError, description);
  }
}

class UnprocessableEntityException extends HttpBaseException {
  constructor(objectOrError, description) {
    super(422, objectOrError, description);
  }
}

class ForbiddenException extends HttpBaseException {
  constructor(objectOrError, description) {
    super(403, objectOrError, description);
  }
}

class NotFoundException extends HttpBaseException {
  constructor(objectOrError, description) {
    super(404, objectOrError, description);
  }
}

class ConflictException extends HttpBaseException {
  constructor(objectOrError, description) {
    super(409, objectOrError, description);
  }
}

class UnauthorizedException extends HttpBaseException {
  constructor(objectOrError, description) {
    super(401, objectOrError, description);
  }
}

class BadRequestException extends HttpBaseException {
  constructor(objectOrError, description) {
    super(400, objectOrError, description);
  }
}

class UnsupportedMediaTypeException extends HttpBaseException {
  constructor(objectOrError, description) {
    super(415, objectOrError, description);
  }
}

module.exports = {
  UnauthorizedException,
  UnprocessableEntityException,
  UnsupportedMediaTypeException,
  ConflictException,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
  UnprocessableEntityException,
  ServiceUnavailableExceptions,
};
