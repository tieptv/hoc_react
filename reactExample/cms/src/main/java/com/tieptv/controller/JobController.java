package com.tieptv.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.Repository;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
	@GetMapping(value=ConstantPage.REST_API_GET_ALL_JOB, produces={ MediaType.APPLICATION_PROBLEM_JSON_VALUE })
	public List<Job> listJob() {
		return jobService.getAll();
	}
	@PostMapping(value=ConstantPage.REST_API_INSERT_JOB, produces={ MediaType.APPLICATION_PROBLEM_JSON_VALUE })
	public  ResponseEntity<Object>  insertJob(@RequestBody Job job) {
		try {
		jobService.insert(job);
		return new ResponseEntity<>(true,HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>("Server lỗi",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	@PostMapping(value=ConstantPage.REST_API_UPDATE_JOB, produces={ MediaType.APPLICATION_PROBLEM_JSON_VALUE })
	public  ResponseEntity<Object>  updateJob(@RequestParam String data) {
		JSONObject jsonObject = new JSONObject(data);
		int id= jsonObject.getInt("id");
		String name= jsonObject.getString("name");
		String status = jsonObject.getString("status");
		Job job= new Job();
		job.setId(id);
		job.setName(name);
		job.setStatus(status);
		try {
		jobService.insert(job);
		return new ResponseEntity<>(true,HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>("Server lỗi",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping(value=ConstantPage.REST_API_DELETE_JOB_BY_ID, produces={ MediaType.APPLICATION_PROBLEM_JSON_VALUE })
	public void deleteJob(@PathVariable int id) {
	 jobService.delete(id);
	}
	@GetMapping(value=ConstantPage.REST_API_GET_JOB_BY_ID, produces={ MediaType.APPLICATION_PROBLEM_JSON_VALUE })
	public Job getJobById(@PathVariable int id) {
		return jobService.findById(id);
	}
}
