package com.sheild.taskmanagement.service;

import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sheild.taskmanagement.dto.TaskDTO;
import com.sheild.taskmanagement.entity.Task;
import com.sheild.taskmanagement.repo.TaskRepo;


@Service
@Transactional
public class TaskService {
    @Autowired
    private TaskRepo taskRepo;
    @Autowired
    private ModelMapper modelMapper;
    public TaskDTO taskSave(TaskDTO taskDTO){
        Task task = modelMapper.map(taskDTO, Task.class);
        taskRepo.save(task);
        return taskDTO;
    }
}
