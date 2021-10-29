package de.justuse.backend.controller.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@Slf4j
public class ControllerAdvisor extends ResponseEntityExceptionHandler {

    @ExceptionHandler(HttpServerErrorException.class)
    public ResponseEntity<ApiError> handleInternalServerErrorException(HttpServerErrorException ex) {

        log.error("Internal Server Error", ex);
        ApiError apiError = new ApiError("InternalServerError, see exception message for details", ex.getMessage());

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);

    }

}
