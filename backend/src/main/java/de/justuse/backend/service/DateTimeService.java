package de.justuse.backend.service;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@Service
public class DateTimeService {

    private final DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd.MM.yyyy");

    public String currentDate() {
        return LocalDate.now().format(dateTimeFormatter);
    }

    public String returnDate(long rentalCycleInMonth) {
        return LocalDate.now().plusMonths(rentalCycleInMonth).format(dateTimeFormatter);
    }

    public String collectionDate() {
        return LocalDate.now().plusDays(2L).format(dateTimeFormatter);
    }

}
