package com.gavel.aspect;

import com.gavel.common.utils.ResourceTags;
import com.gavel.common.utils.ThreadContext;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;
import java.util.Set;

/**
 * @author Qi.Song
 * @since 2017/3/13.
 */
@Component
@Aspect
public class RequestResourceAspect implements Ordered {

    private static Logger logger = LoggerFactory.getLogger(RequestResourceAspect.class);

    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {
        HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();

        //请求url
        String contextPath = request.getContextPath();
        String url = request.getRequestURI();

        Set<String>  resourceTags= ResourceTags.get(url.replace(contextPath, ""));
        System.out.println("RequestResourceAspect: " + contextPath + ""  + url + " ==> " + resourceTags);
        try {
            Object result = joinPoint.proceed();

            return result;
        } catch (RuntimeException e) {
            ThreadContext.getReturnData().setSuccess(false);
            ThreadContext.getReturnData().setMessage(e.getMessage());
            throw e;
        }

    }

    @Override
    public int getOrder() {
        return 0;
    }
}
