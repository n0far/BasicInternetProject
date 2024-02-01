package org.example.config;
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class SpringCORSFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletResponse httpServletResponse=(HttpServletResponse) response;
        httpServletResponse.setHeader("Access-Control-Allow-Origin","*");
        httpServletResponse.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE,OPTIONS");
        httpServletResponse.setHeader("Access-Control-Allow-Headers","*");
        chain.doFilter(request,response);
    }

    @Override
    public void destroy() {
    }

    @Override
    public void init(FilterConfig filterConfig)  {
    }

}
