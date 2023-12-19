import React, { useEffect } from 'react'
import Image from '../../images/appicon.png'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditTaskForm = ({id}) => {

    const navigate = useNavigate();

    const [task, setTask] = useState({});
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [assignedFor, setAssignedFor] = useState('');
    const [deadline, setDeadline] = useState('');


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/task/get/${id}`)
        .then((res)=>{
            setTask(res.data);
            setName(res.data.name);
            setDescription(res.data.description);
            setAssignedFor(res.data.assignedFor);
            setDeadline(res.data.deadline);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const assignedBy = task.assignedBy;
        const assignDate = task.assignDate;
        const status = task.status;

        const data = {
            id, name, description, assignedBy, assignedFor, assignDate, deadline, status
        };

        axios.put("http://localhost:8080/api/v1/task/update", data) 
        .then((res)=>{
            console.log(res);
            navigate('/allTasks');
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
        <div className='row'>
            <div className='col-md-6'>
                <img src={Image} style={img}></img>
            </div>
            <div className='col-md-6'>
                <form > 
                    <h3 style={formTopic}>Enter Task Data Below</h3>
                    <input type='text' className='form-control' placeholder='Task Topic' defaultValue={task.name} required onChange={(e) => setName(e.target.value)} style={inputS}/>
                    <textarea type='text' className='form-control' placeholder='Task Description' defaultValue={task.description} required rows="3" onChange={(e) => setDescription(e.target.value)} style={inputS}/>
                    <input type='text' className='form-control' placeholder='Assigned To' required defaultValue={task.assignedFor} onChange={(e) => setAssignedFor(e.target.value)} style={inputS}/>
                    <input type='text' className='form-control' placeholder='Due Date' required defaultValue={task.deadline} onChange={(e) => setDeadline(e.target.value)} style={inputS}/>
                    <button className='btn btn-warning' onClick={(e) => handleSubmit(e)} style={btn}>Edit Task</button>
                </form> 
            </div>
        </div>
    </div>
)
}

const img = {
    marginTop: '20px',
    marginLeft: '100px',
    width: '50%',
}

const formTopic = {
    marginTop: '10px',
    marginLeft: '100px',
    fontSize: '20px',
}

const inputS = {
    marginTop: '20px',
    marginLeft: '100px',
    width: '80%',
}

const btn = {
    marginTop: '20px',
    marginLeft: '100px',
    width: '80%',
}

export default EditTaskForm