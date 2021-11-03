package de.justuse.backend.security.repository;

import de.justuse.backend.security.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserDAO extends PagingAndSortingRepository<AppUser, String> {
}
