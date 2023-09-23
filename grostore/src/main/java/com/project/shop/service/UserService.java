package com.project.shop.service;



import java.util.List;

import org.springframework.stereotype.Service;

import com.project.shop.model.UserModel;
import com.project.shop.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;


@Service
public class UserService {

	
	@Autowired
	public UserRepo usrepo;
	
//	//post data
	public UserModel saveUsers(UserModel u)
	{
		return usrepo.save(u);
	}
	//get data
		public List<UserModel> getUser()
		{
			return usrepo.findAll();
		}
		
		//update data
		public UserModel updateUser(UserModel umm)
		{
			return usrepo.saveAndFlush(umm);
		}
	
			
		//update the data if id present
		
		public boolean updateUserif(int userId,UserModel um) {
			
			if(usrepo.existsById(userId)) {
				
				usrepo.save(um);
				
				return true;
				
			}
			
			return false;
			
		}
		
		//delete data
		public void deleteUsers(int user_id)
		{
			 usrepo.deleteById(user_id);
			 System.out.println("Deleted");
			
		}
	
		
		
		//delete if id is present
		public boolean deleteUserif(int usersId)
		{
			if(usrepo.existsById(usersId))
			{
				usrepo.deleteById(usersId);
				return true;
			}
			return false;
		}
		
		

//	//sorting
			public List<UserModel>sortByAsc(String name){
			return usrepo.findAll(Sort.by(name).ascending());}
//			
	//sort desc
		public List<UserModel> sortbydsc(String name)

		 {

		     return usrepo.findAll(Sort.by(name).descending());

		 }

	 public List<UserModel> pagination(int num,int size)

	 {
        Page<UserModel> cont=usrepo.findAll(PageRequest.of(num, size));

		 return cont.getContent();

	 }
	
	//get all the data
			public List<UserModel> getAllRows()
			{
				return usrepo.getAllRows();
			}
			
			//get name like
			public List<UserModel>getByname(String name)
			{
				return usrepo.getByname(name);
			}
			
			
			
			
	//get specific rows
			public List<UserModel> getSpecrows(String add,String name)
			{
				return usrepo.getSpecRows(add, name);
			}
			//delete data
			public int deleteRowByid(int id)
			{
				return usrepo.deleteId(id);
			}
			//update 
			public int updateRow(String add,int id)
			{
				return usrepo.updateByid(add, id);
			}
			public List<UserModel> findLastName(String lname)
			{
				return usrepo.getLastname(lname);
			}
			public int countnoofId()
			{
				return usrepo.countId();
			}
			public int maximage()
			{
				return usrepo.maxage();
			}
			public int minage()
			{
				return usrepo.minage();
			}
			
		}

	







