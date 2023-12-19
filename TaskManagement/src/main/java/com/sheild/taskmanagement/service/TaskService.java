package com.sheild.taskmanagement.service;

import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sheild.taskmanagement.dto.TaskDTO;
import com.sheild.taskmanagement.entity.Task;
import com.sheild.taskmanagement.repo.TaskRepo;

import java.util.List;
import java.util.Optional;


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

    public List<TaskDTO> getAllTasks(){
        List<Task>taskList = taskRepo.findAll();
        return modelMapper.map(taskList, new TypeToken<List<TaskDTO>>(){}.getType());
    }

    public TaskDTO getTaskById(int taskId) {
        Optional<Task> taskOptional = taskRepo.findById(taskId);

        Task task = taskOptional.get();
        return modelMapper.map(task, TaskDTO.class);
    }

    public TaskDTO updateTask(TaskDTO taskDTO){
        taskRepo.save(modelMapper.map(taskDTO, Task.class));
        return taskDTO;
    }

    public boolean deleteTask(TaskDTO taskDTO){
        taskRepo.delete(modelMapper.map(taskDTO, Task.class));
        return true;
    }
}
