package de.justuse.backend.repository;

import de.justuse.backend.model.Image;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface ImageDAO extends PagingAndSortingRepository<Image, String> {

    @Override
    List<Image> findAll();
}
