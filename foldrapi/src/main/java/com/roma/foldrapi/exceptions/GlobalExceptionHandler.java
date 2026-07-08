package com.roma.foldrapi.exceptions;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice // this tells spring that this class will handle exceptions globally for all controllers
public class GlobalExceptionHandler {

    @ExceptionHandler(DuplicateKeyException.class)
    public ResponseEntity<?> handleDuplicateEmailException(DuplicateKeyException ex) {
        Map<String, Object> data = new HashMap<>();
        data.put("status", HttpStatus.CONFLICT);
        data.put("message", ex.getMessage());

        return ResponseEntity.status(HttpStatus.CONFLICT).body(data);

    }

}
