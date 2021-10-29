package de.justuse.backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "MAX_RENTAL_CYCLE can't be 0")
public class BadRequestException extends RuntimeException{}
