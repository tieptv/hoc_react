package com.tieptv.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tieptv.service.JobService;
import com.tieptv.utils.ConstantPage;
import java.util.List;
import com.tieptv.entity.Job;


@CrossOrigin(origins = "*")
@RestController
public class JobController {
  @Autowired
  private JobService jobService;
	@GetMapping(value=ConstantPage.REST_API_GET_ALL_JOB)
	public List<Job> listJob() {
		return jobService.getAll();
	}
}
