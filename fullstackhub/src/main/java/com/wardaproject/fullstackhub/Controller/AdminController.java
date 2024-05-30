package com.wardaproject.fullstackhub.Controller;

import com.wardaproject.fullstackhub.Repository.AdminRepository;
import com.wardaproject.fullstackhub.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("/")
@RestController
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @PostMapping("/admin")
    Admin newAdmin(@RequestBody Admin newAdmin){
        return adminRepository.save(newAdmin);
    }

    @GetMapping("/admins")
    List<Admin> getAllAdmin(){
        return adminRepository.findAll();
    }

}
