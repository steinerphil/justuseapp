package de.justuse.backend.repository;

import de.justuse.backend.model.PayPalCaptureResponseDTO;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface OrderDAO extends PagingAndSortingRepository<PayPalCaptureResponseDTO, String> {

    @Override
    List<PayPalCaptureResponseDTO> findAll();
}
