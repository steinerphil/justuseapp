package de.justuse.backend.repository;

import de.justuse.backend.model.Product;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductDAO extends PagingAndSortingRepository<Product, String> {

    @Override
    List<Product> findAll();
}
