package de.justuse.backend.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductDAO extends PagingAndSortingRepository<ProductDAO, String> {

    @Override
    List<ProductDAO> findAll();
}
