package com.project.shop.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.project.shop.model.UserModel;

import jakarta.transaction.Transactional;
@Repository
public interface UserRepo  extends JpaRepository<UserModel,Integer>{
 //native Query
		@Query(value="select * from usermodel", nativeQuery = true)
		public List<UserModel> getAllRows();
		
//		@Query(value="select * from usermodel where userName like %?1%",nativeQuery=true)
//		public List<UserModel> getByname(@Param("name") String name);
//		
		
		@Query(value="select * from usermodel where address=:addr and hotelname=:name",nativeQuery = true )
		public List<UserModel> getSpecRows(@Param("addr") String addr,@Param("name") String name);

		//Delete using native query
		@Modifying
		@Transactional
		@Query(value="delete from usermodel where user_id=:id",nativeQuery=true)
		public int deleteId(@Param("id") int id);
		
		@Modifying
		@Transactional
		@Query(value="update usermodel set address=:addr where user_id=:id",nativeQuery=true)
		public Integer updateByid(@Param("addr") String addr,@Param("id") int id);
	
		@Query("select u from UserModel u where u.userName like %?1%")
		public List<UserModel>getByname(@Param("name") String name);
	
		@Query(value="select * from usermodel where lastname=:lname",nativeQuery = true )
		public List<UserModel> getLastname(@Param("lname") String lname);
		
		@Query(value="select count(user_id) from usermodel",nativeQuery=true)
		public Integer countId();
		
		@Query(value="select max(age) from usermodel",nativeQuery=true)
		public Integer maxage();
		
		@Query(value="select min(age) from usermodel",nativeQuery=true)
		public Integer minage();
		
}
