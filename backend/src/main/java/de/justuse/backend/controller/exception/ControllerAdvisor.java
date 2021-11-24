package de.justuse.backend.controller.exception;

import de.justuse.backend.exceptions.InvalidObjectException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.mongodb.core.aggregation.ArrayOperators;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.io.IOException;
import java.util.NoSuchElementException;

@ControllerAdvice
@Slf4j
public class ControllerAdvisor extends ResponseEntityExceptionHandler {

    @ExceptionHandler(HttpServerErrorException.class)
    public ResponseEntity<ApiError> handleInternalServerErrorException(HttpServerErrorException ex) {

        log.error("Internal Server Error", ex);
        ApiError apiError = new ApiError("InternalServerError, see exception message for details", ex.getMessage());

        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);

    }

    @ExceptionHandler(InvalidObjectException.class)
    public ResponseEntity<ApiError> handleInvalidObjectException(InvalidObjectException e){
        log.error("Invalid Object Exception was thrown", e);
        ApiError apiError = new ApiError("given object is not valid", e.getMessage());
         return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ApiError> handleNoSuchElementException(NoSuchElementException e){
        log.error("NoSuchElementException was thrown", e);
        ApiError apiError = new ApiError("element not found.", e.getMessage());
        return new ResponseEntity<>(apiError, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(IOException.class)
    public ResponseEntity<ApiError> handleIOException(IOException e){
        log.error("IOException was thrown", e);
        ApiError apiError = new ApiError("bad request.", e.getMessage());
        return new ResponseEntity<>(apiError, HttpStatus.BAD_REQUEST);
    }

}
