package com.sheild.taskmanagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Task {

    @Id
    private int id;
    private String name;
    private String description;
    private String assignedBy;
    private String assignedFor;
    private Date assignDate;
    private Date deadline;
    private String status;
}
