package com.tieptv.cms;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class JobServiceImpl implements JobService {
  @Autowired
  private JobRepository jobRepository;
	@Override
	public void insert(Job job) {
		jobRepository.save(job);
	}

	@Override
	public void update(Job job) {
		jobRepository.save(job);
	}

	@Override
	public void delete(int id) {
		jobRepository.deleteById(id);
	}

	@Override
	public List<Job> search(String key) {
		return jobRepository.findByName(key);
	}

	@Override
	public Job findById(int id) {
		
		return jobRepository.findById(id);
	}

	@Override
	public List<Job> getAll() {
		return jobRepository.findAll();
	}

}