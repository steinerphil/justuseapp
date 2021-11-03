package de.justuse.backend.security.filter;

import de.justuse.backend.security.service.AppUserDetailService;
import de.justuse.backend.security.service.JwtUtilsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.nio.file.AccessDeniedException;

@Component
@Slf4j
public class JwtRequestFilter extends OncePerRequestFilter {

    private final JwtUtilsService jwtUtilsService;
    private final AppUserDetailService appUserDetailService;

    public JwtRequestFilter(JwtUtilsService jwtUtilsService, AppUserDetailService appUserDetailService) {
        this.jwtUtilsService = jwtUtilsService;
        this.appUserDetailService = appUserDetailService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        final String jwt = getAuthToken(request);

        try {
            if(jwt != null && !jwt.isBlank() && SecurityContextHolder.getContext().getAuthentication() == null){
                String username = jwtUtilsService.extractUsername(jwt);
                UserDetails userDetails = appUserDetailService.loadUserByUsername(username);
                if(jwtUtilsService.validateToken(jwt, userDetails)){
                    setSecurityContext(userDetails, request);
                }
            }
        } catch (Exception e) {
            throw new AccessDeniedException("invalid token, access denied.", e.getMessage(), "");
        }

        log.info("received jwt: " + jwt);
        filterChain.doFilter(request, response);
    }

    private void setSecurityContext(UserDetails userDetails, HttpServletRequest request) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
    }

    private String getAuthToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        if(authHeader != null && authHeader.startsWith("Bearer ")){
            return authHeader.substring(7);
        }
        return null;
    }


}
