package com.skyway.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skyway.entity.Request;

@Repository
public interface RequestRepository extends CrudRepository<Request, Long> {
	public Iterable<Request> findByUserId(String userId);
	
	public Iterable<Request> findByStatus(Integer status);
}
