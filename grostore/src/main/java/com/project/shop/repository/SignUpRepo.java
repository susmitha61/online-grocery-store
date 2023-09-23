package com.project.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.project.shop.model.SignUp;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.query.Param;

public interface SignUpRepo extends JpaRepository<SignUp,Integer> {
// @Query(value="select login from signup where email=:email",nativeQuery=true)
// public int getEmail(@Param("email") String email);
}