package com.project.shop.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signup")
public class SignUp {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int loginid;
private String password;
private String email;
private String name;
public String getPassword() {
return password;
}
public void setPassword(String password) {
this.password = password;
}
public String getEmail() {
return email;
}
public void setEmail(String email) {
this.email = email;
}
public int getLoginid() {
return loginid;
}
public void setLoginid(int loginid) {
this.loginid = loginid;
}
public String getName() {
return name;
}
public void setName(String name) {
this.name = name;
}

}