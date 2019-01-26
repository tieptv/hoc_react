package com.tieptv.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tieptv.entity.Job;
@Repository
public interface JobRepository extends JpaRepository<Job, Integer>  {
	Job findById(int id);
	List<Job> findByName(String name);
}
