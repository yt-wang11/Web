package com.example.fac;

import com.example.fac.controller.LoginController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * 判定用户是否登陆的拦截器
 */
public class LoginInterceptor implements HandlerInterceptor {

    private Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);

    /**
     * 如果HttpRequest请求的是/view/**路径访，并且没有带有session则转跳到登陆页面
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        /*if(request.getServletPath().startsWith("/view/")){
            logger.info("拦截器: 拦截访问路径'" + request.getRequestURI() + "'，该URL处于/view下，需要进行session验证。");

        }else{
            logger.info("拦截器： 拦截访问路径'" + request.getRequestURI() + "'， 不在/view之下,非访问控制路径， 无需从session中获取用户信息...");
            return true;
        }*/
        HttpSession session = request.getSession();
        if (session.getAttribute(LoginController.ATTR_USER_NAME) == null) {
            logger.info("拦截器:session中没有用户信息，该页面无法继续访问，转跳到/login页面");
            response.sendRedirect("/login");
            return false;
        }else{
            logger.info("拦截器: session中存在用户信息，该页面可以继续访问， userName = " + session.getAttribute(LoginController.ATTR_USER_NAME) + ", session = " + session.getId());
            return true;
        }
    }

    public void postHandle(HttpServletRequest request,
                           HttpServletResponse response, Object handler,
                           ModelAndView modelAndView) throws Exception {

    }

    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {

    }
}
