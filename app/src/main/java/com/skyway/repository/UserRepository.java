package com.skyway.repository;

import org.springframework.data.repository.CrudRepository;

import com.skyway.entity.User;

public interface UserRepository extends CrudRepository<User, String> {

}
