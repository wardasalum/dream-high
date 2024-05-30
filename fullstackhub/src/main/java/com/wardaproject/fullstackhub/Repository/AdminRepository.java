package com.wardaproject.fullstackhub.Repository;

import com.wardaproject.fullstackhub.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
}
