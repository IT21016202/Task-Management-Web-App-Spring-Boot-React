package com.sheild.taskmanagement.repo;

import com.sheild.taskmanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer>  {
}
