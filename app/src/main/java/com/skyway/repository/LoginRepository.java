package com.skyway.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.skyway.entity.Login;

@Repository
public interface LoginRepository extends CrudRepository<Login, String> {

}
