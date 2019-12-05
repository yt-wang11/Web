package com.example.fac;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * 注册全局拦截器注册器等
 */
@Configuration
public class WebMvcConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(getLoginInterceptor()).addPathPatterns("/**")
        .excludePathPatterns("/login","/loginValidate", "/search", "/searchDetail", "/**/*.css", "/**/*.js", "/**/*.png", "/**/*.jpg", "/**/*.jpeg","/**/*.json", "/**/*.woff", "/**/*.ttf", "/**/*.svg", "/**/*.eot", "/**/*.woff2");
    }

    @Bean
    public HandlerInterceptor getLoginInterceptor(){
        return new LoginInterceptor();
    }
}
