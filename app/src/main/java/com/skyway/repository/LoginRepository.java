package com.skyway.repository;

import org.springframework.data.repository.CrudRepository;

import com.skyway.entity.Login;

public interface LoginRepository extends CrudRepository<Login, String> {

}
