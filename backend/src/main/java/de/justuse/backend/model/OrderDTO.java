package de.justuse.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderDTO {


    private String intent;
    @JsonProperty("purchase_units")
    private PurchaseUnits[] purchaseUnits;
}

