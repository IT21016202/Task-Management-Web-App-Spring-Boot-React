package com.sheild.taskmanagement.controller;

import com.sheild.taskmanagement.entity.Task;
import com.sheild.taskmanagement.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.sheild.taskmanagement.dto.TaskDTO;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/task")
@CrossOrigin
public class TaskController {
    @Autowired
    TaskService taskService;

    @GetMapping("/get")
    public List<TaskDTO> getTask(){
        return taskService.getAllTasks();
    }

    @GetMapping("/get/{taskId}")
    public ResponseEntity<TaskDTO> getTaskById(@PathVariable int taskId) {
        TaskDTO taskDTO = taskService.getTaskById(taskId);
        return new ResponseEntity<>(taskDTO, HttpStatus.OK);
    }

    @PostMapping("/add")
    public TaskDTO saveTask(@RequestBody TaskDTO taskDTO){
        return taskService.taskSave(taskDTO);
    }

    @PutMapping("/update")
    public TaskDTO updateTask(@RequestBody TaskDTO taskDTO){
        return taskService.updateTask(taskDTO);
    }

    @DeleteMapping("/delete")
    public boolean deleteTask(@RequestBody TaskDTO taskDTO){
        return taskService.deleteTask(taskDTO);
    }
}

