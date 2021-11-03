package de.justuse.backend.security.service;

import de.justuse.backend.security.repository.AppUserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AppUserDetailService implements UserDetailsService {

    private final AppUserDAO appUserDAO;

   @Autowired
    public AppUserDetailService(AppUserDAO appUserDAO) {
        this.appUserDAO = appUserDAO;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return appUserDAO.findById(username)
                .map(appUser -> User
                        .withUsername(username)
                        .password(appUser.getPassword())
//                        .authorities(new ArrayList<>())
                        .authorities("user")
                        .build())
                .orElseThrow( () -> new UsernameNotFoundException("Username does not exist: " + username));
    }
}
