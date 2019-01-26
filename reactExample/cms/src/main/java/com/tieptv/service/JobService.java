package com.tieptv.service;

import java.util.List;

import com.tieptv.entity.Job;

public interface JobService {
  List<Job> getAll();
  void insert(Job job);
  void update(Job job);
  void delete(int id);
  List<Job> search(String key);
  Job findById(int id);
  
}
