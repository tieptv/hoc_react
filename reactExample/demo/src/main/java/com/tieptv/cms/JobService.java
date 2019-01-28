package com.tieptv.cms;

import java.util.List;



public interface JobService {
  List<Job> getAll();
  Job insert(Job job);
  void update(Job job);
  void delete(int id);
  List<Job> search(String key);
  Job findById(int id);
  
}
