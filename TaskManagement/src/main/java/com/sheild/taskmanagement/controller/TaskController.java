package com.sheild.taskmanagement.controller;

import com.sheild.taskmanagement.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.sheild.taskmanagement.dto.TaskDTO;

@RestController
@RequestMapping(value = "api/v1/task")
@CrossOrigin
public class TaskController {
    @Autowired
    TaskService taskService;
    @GetMapping("/get")
    public String getTask(){
        return "Task List";
    }

    @PostMapping("/add")
    public TaskDTO saveTask(@RequestBody TaskDTO taskDTO){
        return taskService.taskSave(taskDTO);
    }
}
