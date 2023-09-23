package com.project.shop.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.project.shop.model.SignUp;
import com.project.shop.service.SignUpService;

@CrossOrigin("*")
@RestController
public class SignUpController {
@Autowired
    SignUpService suser;
    @PostMapping("/save")
    public SignUp saveDetails(@RequestBody SignUp su)
    {
    return suser.savedetails(su);
    }
//    @GetMapping("/users/{email}")
// public ResponseEntity<?> getUserById(@PathVariable String email){
// Optional<SignUp> ot=suser.getEmailDetails(email);
//    if(ot==null)
//    {
//    return null;
//    }
// }
}