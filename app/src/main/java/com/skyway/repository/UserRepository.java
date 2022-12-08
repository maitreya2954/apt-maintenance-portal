package com.skyway.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skyway.entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

}
