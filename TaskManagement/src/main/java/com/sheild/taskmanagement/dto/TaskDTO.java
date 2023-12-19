package com.sheild.taskmanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TaskDTO {
    private int id;
    private String name;
    private String description;
    private String assignedBy;
    private String assignedFor;
    private Date assignDate;
    private Date deadline;
    private String status;
}
