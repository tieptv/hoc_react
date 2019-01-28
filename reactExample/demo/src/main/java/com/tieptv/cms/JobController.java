package com.tieptv.cms;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
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
	public  Job  insertJob(@RequestBody Job job) {
		try {
		Job result = jobService.insert(job);
		return result;
		
		} catch(Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	@PostMapping(value=ConstantPage.REST_API_UPDATE_JOB, produces={ MediaType.APPLICATION_PROBLEM_JSON_VALUE })
	public  ResponseEntity<Object>  updateJob(@RequestBody Job job) {
		try {
		jobService.update(job);
		return new ResponseEntity<>(true,HttpStatus.OK);
		} catch(Exception e) {
			return new ResponseEntity<>("Server lỗi",HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DeleteMapping(value=ConstantPage.REST_API_DELETE_JOB_BY_ID, produces={ MediaType.APPLICATION_PROBLEM_JSON_VALUE })
	public void deleteJob(@PathVariable int id) {
	 jobService.delete(id);
	}
	@GetMapping(value=ConstantPage.REST_API_GET_JOB_BY_ID, produces={ MediaType.APPLICATION_PROBLEM_JSON_VALUE })
	public Job getJobById(@PathVariable int id) {
		return jobService.findById(id);
	}
}

