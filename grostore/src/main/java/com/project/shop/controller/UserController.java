package com.project.shop.controller;

import java.util.List;


import org.springframework.web.bind.annotation.RestController;

import com.project.shop.model.UserModel;
import com.project.shop.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@CrossOrigin("*")
@RestController
public class UserController {
	@Autowired
	public UserService uservs;
	@PostMapping("/PostUsers")
	public UserModel postUsers(@RequestBody UserModel ur)

	{
		return uservs.saveUsers(ur);
}
//	//get mapping
	@GetMapping("/getUser")
	public List<UserModel> getUserInfo()
	{
		return uservs.getUser();
		
	}
	
    @PutMapping("/updateUserif/{id}")
    public ResponseEntity<String> updateProdtInfor(@PathVariable int id,@RequestBody UserModel ua){

    	   boolean updated=uservs.updateUserif(id,ua);

 			   if(updated)

 			   {
 				  return ResponseEntity.ok("User with ID "+id+" updated successfully"); //.ok means success
 			   }

 			   else

 			   {
 				  return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with ID "+id+" not found and not updated");
 			   }
 	   }



	//put mapping
@PutMapping("/updateModel")
public UserModel updateUserInfo(@RequestBody UserModel p)
{
	return uservs.updateUser(p);
	}



//delete mapping using reqparam
@DeleteMapping("/byReqParm")
public String removeRequestPam(@RequestParam("id")int ids)
{
	uservs.deleteUsers(ids);
	return "User with Id "+ids+" is deleted";
}

    
	
	//delete using if condition
	@DeleteMapping("/deleteUserif/{id}")
	public ResponseEntity<String>deleteUserInfo(@PathVariable int id)
	{
		boolean deleted=uservs.deleteUserif(id);
		if(deleted)
		{
			return ResponseEntity.ok("user with ID "+id+" deleted successfully");
		}
		else
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with ID "+id+" not found");
		}
	}


//	//sort by asc
@GetMapping("/sortAsc/{name}")
public List<UserModel>sortasc(@PathVariable("name") String name)
	{
	return uservs.sortByAsc(name);
	}
	//sort by desc
	@GetMapping("/sortdsc/{name}")
    public List<UserModel> sortByDsc(@PathVariable("name") String name)

{

	return uservs.sortbydsc(name);

}

    @GetMapping("/pagination/{num}/{size}")

public List<UserModel> paginationDemo(@PathVariable("num") int num,@PathVariable("size") int size)

{

	return uservs.pagination(num,size);

    }
	
	//get all the data
	 @GetMapping("/getAllrows")
	 public List<UserModel> getAllRows()
	 {
		 return uservs.getAllRows();
	 }
	 //get name like 
	 @GetMapping("/getbyName/{name}")
	 public List<UserModel>getName(@PathVariable("name") String name)
	 {
		 return uservs.getByname(name);
	 }
	 //get specific data
	 @GetMapping("/getSpecific/{add}/{name}")
	 public List<UserModel> getSpec(@PathVariable("add") String add,@PathVariable("name") String name)
	 {
		 return uservs.getSpecrows(add, name);
	 }
	 //delete
	 @DeleteMapping("/deleteRow/{id}")
	 public String deleteRow(@PathVariable("add") String add,@PathVariable("id") int id)
	 {
		 return uservs.deleteRowByid(id)+" deleted";
				 
	 }
	 //update
	 @PutMapping("/updateId/{add}/{id}")
	 public String updateInfo(@PathVariable("add") String add,@PathVariable("id") int id)
	 {
		 return uservs.updateRow(add,id)+" rows updated";
	 }
	 @GetMapping("/findLastname/{lname}")
	 public List<UserModel> findLastname(@PathVariable("lname") String lname)
	 {
		 return uservs.findLastName(lname);		 
	 }
	 @GetMapping("/countids")
	 public int countids()
	 {
		 return uservs.countnoofId();
	 }
	 @GetMapping("/maxAge")
	 public int maxAge()
	 {
		 return uservs.maximage();
	 }
	 @GetMapping("/minAge")
	 public int minAge()
	 {
		 return uservs.minage();
	 }
	

}
