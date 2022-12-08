package com.skyway.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@ComponentScan("com.skyway")
@EntityScan("com.skyway.entity")
@SpringBootApplication(scanBasePackages = {"com.skyway.repository", "com.skyway.controller"})
//@SpringBootApplication
@EnableJpaRepositories("com.skyway.repository")
public class AppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}

}
