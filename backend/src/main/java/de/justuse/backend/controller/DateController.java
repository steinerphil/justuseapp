package de.justuse.backend.controller;

import de.justuse.backend.service.DateTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/date")
@RestController
public class DateController {

    private final DateTimeService dateTimeService;

    @Autowired
    public DateController(DateTimeService dateTimeService) {
        this.dateTimeService = dateTimeService;
    }

    @GetMapping("/current")
    public String getCurrentDate(){
        return dateTimeService.currentDate();
    }

    @GetMapping("/return/{rentalCycleInMonth}")
    public String getReturnDate(@PathVariable String rentalCycleInMonth){
        return dateTimeService.returnDate(Long.parseLong(rentalCycleInMonth));
    }

    @GetMapping("/collection")
    public String getCollectionDate(){
        return dateTimeService.collectionDate();
    }
}
