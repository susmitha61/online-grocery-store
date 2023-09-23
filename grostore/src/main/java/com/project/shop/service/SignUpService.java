package com.project.shop.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;


import com.project.shop.model.SignUp;
import com.project.shop.repository.SignUpRepo;

@Service
public class SignUpService {
@Autowired
public SignUpRepo surepo;
public SignUp savedetails(SignUp su)
{
    return surepo.save(su);
}
// public Optional<SignUp> getEmailDetails(String email)
//    {
//   Optional<SignUp> note=surepo.findOne();
//   if(note.isPresent())
//   {
//   return note;
//   }
//   return null;
//    }
}