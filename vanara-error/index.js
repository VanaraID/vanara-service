class DomainError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

class InternalServerError extends DomainError {
    constructor(error) {
        super(error.message);
        this.data = { error };
    }
}

class NotFound extends DomainError {
    constructor(resource, query) {
        super(`Resource ${resource} was not found.`);
        this.data = { resource, query };
    }
}

class BadRequest extends DomainError {
    constructor(error) {
        super(error.message);
        this.data = { error };
    }
}

module.exports = {
    InternalServerError,
    NotFound,
    BadRequest
};