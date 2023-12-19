import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AllTaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      axios.get('http://localhost:8080/api/v1/task/get').then((res) => {
        setTasks(res.data);
      });

    }, []);

    // Filter tasks by name
    const filteredTasks = tasks.filter((task) => {
      return task.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    function deleteTask(task){
  
      const result = window.confirm('Are you sure you want to delete this task ?');
      if(result){
        axios.delete("http://localhost:8080/api/v1/task/delete", task)
        .then((res)=>{
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
        })
      }
      
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };


    return (
      <div>
        <input type='text' placeholder='Search Tasks' style={styles.search} onChange={event=>{setSearchTerm(event.target.value)}}/>
        <hr style={styles.hr}/>
        <br/>
          {filteredTasks.map((task) => (
            <div className='row' style={styles.container} key={task.id}>
              <div className='col-md-8'>
                <h3 style={styles.name}>{task.name}</h3>
                <h6 style={styles.des}>{task.description}</h6>
                <p style={styles.details}>Assigned By: {task.assignedBy}</p>
                <p style={styles.details}>Assigned To: {task.assignedFor}</p>
                <p style={styles.details}>Assigned On: {task.assignDate}</p>
                <p style={styles.details}>Deadline: {task.deadline}</p>
                <p style={styles.details}>Status: {task.status}</p>
              </div>
              <div className='col-md-4'>
                {/* <button className='btn btn-info' style={styles.btn}>Mark as Completed</button> */}
                <Link to={`/edittask/${task.id}`}><button className='btn btn-warning' style={styles.btn}>Edit</button></Link> 
                <button className='btn btn-danger' onClick={()=>deleteTask(task)} style={styles.btn}>Delete</button>
              </div>
            </div>
          ))}
          <div>
                    <button onClick={scrollToTop} style={styles.goToTop}>⬆️</button>
          </div>
      </div>
    )
}

const styles = {
    container: {
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: '5px',
        padding: '10px',
        backgroundColor: 'lightblue',
    },

    name: {
        fontSize: '20px',
        marginTop: '10px',
        marginLeft: '10px',
        fontWeight: 'bold',
        color: 'black',
    },

    des: {
        fontSize: '16px',
        marginTop: '10px',
        marginLeft: '10px',
        color: 'black',
    },

    btn: {
        fontSize: '16px',
        padding: '5px 10px',
        marginTop: '10px',
        marginLeft: '5px',
        float: 'right', 
    },

    search: {
      fontSize: '16px',
      color: 'black',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '5px 10px',
      display: 'inline-block',
      marginLeft: '5%',
      border: '1px solid gray',
  },

  hr: {
    marginLeft: '5%',
    marginRight: '5%',
  },

  goToTop: {
    position: 'fixed',
    bottom: '0px',
    right: '20px',
    fontSize: '45px',
    fontWeight: 'bold',
    borderRadius: '10px',
    border: 'none',
    backgroundColor: 'white',
    cursor: 'pointer',
    float: 'right',
},

details: {
  fontSize: '14px',
  marginLeft: '10px',
  color: 'black',
  
  marginBottom: '0px',
}
}

export default AllTaskList