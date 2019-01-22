package com.tieptv;



import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {


	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry.addMapping("/**").allowedOrigins("*");
	}

	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}
//	@Override
//	public void addInterceptors(InterceptorRegistry registry) {
//		registry.addInterceptor(new MyInterceptor()).addPathPatterns("/**");
//	}

//	public class MyInterceptor implements HandlerInterceptor {
//		@Override
//		public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
//				throws Exception {
//			System.out.println("afterCompletion");
//		}
//
//		@Override
//		public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
//				throws Exception {
//			System.out.println("postHandle");
//		}
//
//		@Override
//		public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2)
//				throws Exception {
//			return new BaseController().checkRole(request, response, jwtService);
//
//		}
//	}
}
