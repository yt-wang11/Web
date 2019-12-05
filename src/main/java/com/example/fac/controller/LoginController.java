package com.example.fac.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.Timestamp;

@Controller
public class LoginController {

    @Value("${ajax_url}")
    private String ajax_url;

    /*@Value("${cjbh}")
    private String cjbh;*/

    @Autowired
    private RestTemplate restTemplate;

    public static String ATTR_USER_NAME = "username";
    //登陆页面地址，用于未登陆的转跳
    private String loginURL = "/login";
    private String LOGIN_VALIDATE_URL = "/account/validate";
    private int error = 0;




    /**
     * 首页
     *
     * @param request
     * @param response
     * @return
     */
    @RequestMapping(value = {"", "/"})
    public void index(HttpServletRequest request, HttpServletResponse response) {
        try {
            HttpSession session = request.getSession();
            Object userNameObject = session.getAttribute(ATTR_USER_NAME);
            //Object cjbhSession = session.getAttribute("cjbh");
            if (userNameObject != null) {
                response.sendRedirect(request.getContextPath()+"/index");
            } else {
                response.sendRedirect(loginURL);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/index")
    public ModelAndView index(HttpSession session) {
        ModelAndView mv = new ModelAndView("index");
        String cjbh = (String) session.getAttribute("username");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> params= new LinkedMultiValueMap<>();
        params.add("cjbh", cjbh);
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, headers);
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(ajax_url+"/account/get_cjmc", requestEntity , String.class );

        mv.addObject("ajax_url", ajax_url);
        mv.addObject("cjbh", cjbh);
        mv.addObject("cjmc", responseEntity.getBody());
        return mv;
    }

    @RequestMapping("/login")
    public ModelAndView login(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView("login");
        mv.addObject("error", error);
        error = 0;
        return mv;
    }

    @PostMapping("/loginValidate")
    public void loginValidate(String username, String password, String user, HttpServletRequest request, HttpServletResponse response, HttpSession session, RedirectAttributes attrs){
        if ("0".equals(user)){
            try {
                session.setAttribute("kh", username+"&&");
                response.sendRedirect(request.getContextPath()+"/search");
                return;
            }catch (Exception e){
                e.printStackTrace();
            }

        }
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> params= new LinkedMultiValueMap<>();
        params.add("username", username);
        params.add("password", password);
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, headers);
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(ajax_url+LOGIN_VALIDATE_URL, requestEntity , String.class );
        try {
            if ("success".equals(responseEntity.getBody())){
                session.setAttribute(ATTR_USER_NAME, username);
                response.sendRedirect(request.getContextPath()+"/index");
            }else {
                error = 1;
                response.sendRedirect(request.getContextPath()+"/login");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
    /**
     * login退出
     *
     * @param response
     * @return
     */
    @RequestMapping(value = {"/loginOut"})
    public void loginOut(HttpServletResponse response, HttpServletRequest request) {
        try {
            HttpSession session = request.getSession();
            session.removeAttribute(ATTR_USER_NAME);
            response.sendRedirect(request.getContextPath()+"/login");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/search")
    public ModelAndView search(HttpServletRequest request, HttpSession session) {
        String cjbh = session.getAttribute("kh").toString().replace("&&","");
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> params= new LinkedMultiValueMap<>();
        params.add("cjbh", cjbh);
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(params, headers);
        ResponseEntity<String> responseEntity = restTemplate.postForEntity(ajax_url+"/account/get_cjmc", requestEntity , String.class );

        ModelAndView mv = new ModelAndView("search");
        mv.addObject("ajax_url", ajax_url);
        mv.addObject("cjmc", responseEntity.getBody());
        mv.addObject("cjbh", cjbh);
        return mv;
    }

    @RequestMapping("/orderlist")
    public ModelAndView orderList(HttpSession session) {
        ModelAndView mv = new ModelAndView("order");
        mv.addObject("ajax_url", ajax_url);
        mv.addObject("cjbh", session.getAttribute("username"));
        return mv;
    }

    @RequestMapping("/orderadd")
    public ModelAndView orderadd(HttpSession session) {
        ModelAndView mv = new ModelAndView("orderadd");
        mv.addObject("ajax_url", ajax_url);
        mv.addObject("cjbh", session.getAttribute("username"));
        return mv;
    }

    @RequestMapping("/orderModify")
    public ModelAndView orderModify(Integer Id, String Name, String Sex, String Age, String Workdepartment,
                                    String Idcard, String Education, String Title,
                                    String Entrytime, String Contractlife, String Workchangerecord,
                                    String Rewardsandpunishmentrecords, String Rankevaluationrecord,
                                    Integer type, HttpSession session) {
        ModelAndView mv = new ModelAndView("orderModify");
        mv.addObject("ajax_url", ajax_url);
        mv.addObject("cjbh", session.getAttribute("username"));
        mv.addObject("Id", Id);
        mv.addObject("Name", Name);
        mv.addObject("Sex", Sex);
        mv.addObject("Age", Age);
        mv.addObject("Workdepartment", Workdepartment);
        mv.addObject("Idcard", Idcard);
        mv.addObject("Education", Education);
        mv.addObject("Title", Title);
        mv.addObject("Entrytime", Entrytime);
        mv.addObject("Contractlife", Contractlife);
        mv.addObject("Workchangerecord", Workchangerecord);
        mv.addObject("Rewardsandpunishmentrecords", Rewardsandpunishmentrecords);
        mv.addObject("Rankevaluationrecord", Rankevaluationrecord);
        mv.addObject("showType", type);
        return mv;
    }


    @RequestMapping("/welcome")
    public ModelAndView welcome(String code, HttpSession session) {
        ModelAndView mv = new ModelAndView("welcome");
        mv.addObject("ajax_url", ajax_url);
        mv.addObject("cjbh", session.getAttribute("username"));
        return mv;
    }

    @RequestMapping("/session")
    @ResponseBody
    public void session(String sid) {
        System.out.println("这是一个防止页面session丢失的链接" + sid);
    }

    @RequestMapping("/modifyPwd")
    public ModelAndView modifyPwd(HttpSession session) {
        ModelAndView mv = new ModelAndView("modifyPwd");
        mv.addObject("ajax_url", ajax_url);
        mv.addObject("cjbh", session.getAttribute("username"));
        return mv;
    }
}
