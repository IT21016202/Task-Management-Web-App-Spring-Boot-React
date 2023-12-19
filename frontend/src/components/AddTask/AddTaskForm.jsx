import React, { useEffect } from 'react'
import Image from '../../images/appicon.png'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTaskForm = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [assignedFor, setAssignedFor] = useState('');
    const [deadline, setDeadline] = useState('');

    const [taskList, setTaskList] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/task/get')
        .then((res)=>{
            setTaskList(res.data.length);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        //check user entered data
        if(name === '' || description === '' || assignedFor === '' || deadline === ''){
            window.alert('Please Enter All Details !');
            return;
        } 

        const id = taskList+1;
        const assignedBy = 'User';
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const assignDate = new Date().toLocaleDateString('en-US', options).split('/').reverse().join('-');
        const status = 'Pending';

        const data = {
            id, name, description, assignedBy, assignedFor, assignDate, deadline, status
        };
        console.log(data);

        axios.post('http://localhost:8080/api/v1/task/add', data)
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
                        <input type='text' className='form-control' placeholder='Task Topic' required onChange={(e) => setName(e.target.value)} style={inputS}/>
                        <textarea type='text' className='form-control' placeholder='Task Description' required rows="3" onChange={(e) => setDescription(e.target.value)} style={inputS}/>
                        <input type='text' className='form-control' placeholder='Assigned To' required onChange={(e) => setAssignedFor(e.target.value)} style={inputS}/>
                        <input type='date' className='form-control' placeholder='Due Date' required onChange={(e) => setDeadline(e.target.value)} style={inputS}/>
                        <button className='btn btn-success' onClick={(e) => handleSubmit(e)} style={btn}>Add Task</button>
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

export default AddTaskForm