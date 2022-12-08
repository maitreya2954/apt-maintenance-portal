package com.skyway.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skyway.entity.Request;

@Repository
public interface RequestRepository extends CrudRepository<Request, Long> {


}
